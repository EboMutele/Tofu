import asyncio
import logging
from fastapi import FastAPI
from apscheduler.schedulers.asyncio import AsyncIOScheduler

from scraper import fetch_forebet_predictions
from normalizer import normalize_predictions
from engine import apply_prediction_rules
from odds import fetch_bookmaker_odds
from ai_validator import validate_premium_picks_with_ai
from publisher import publish_to_telegram

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Tofu Tips - Prediction Microservice")
scheduler = AsyncIOScheduler()

async def run_prediction_pipeline():
    logger.info("Starting Daily Prediction Pipeline...")
    
    # 1. Scrape
    raw_data = await fetch_forebet_predictions()
    
    # 2. Normalize
    normalized_data = normalize_predictions(raw_data)
    
    # 3 & 4. Filter matches
    filtered_matches = []
    for match in normalized_data:
        res = apply_prediction_rules(match)
        if res:
            filtered_matches.append(res)
            
    logger.info(f"Matches after filtering: {len(filtered_matches)}")
    
    # 5. Odds fetch
    validated_matches = await fetch_bookmaker_odds(filtered_matches)
    
    # 6. Generate free picks
    # Simplistic heuristic: top 8 matches by total odds around 3
    free_picks = validated_matches[:8] 
    
    # 8. AI Premium Validation
    premium_candidates = validated_matches[:12]
    premium_slips = await validate_premium_picks_with_ai(premium_candidates)
    
    # 9. Store predictions (database hook here)
    logger.info("Storing predictions to database...")
    
    # 10. Publish
    await publish_to_telegram(free_picks, channel_id="@TofuTipsFree", is_premium=False)
    
    logger.info("Pipeline Execution Completed.")

@app.on_event("startup")
async def startup_event():
    # Schedule the pipeline daily at 10:00 AM
    scheduler.add_job(run_prediction_pipeline, 'cron', hour=10, minute=0)
    scheduler.start()
    logger.info("Scheduler started.")

@app.post("/api/run-pipeline")
async def trigger_pipeline():
    """Manually trigger the automation pipeline."""
    asyncio.create_task(run_prediction_pipeline())
    return {"status": "Pipeline triggered in background"}
