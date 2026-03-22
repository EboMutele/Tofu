import asyncio
from playwright.async_api import async_playwright
from bs4 import BeautifulSoup
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

async def fetch_forebet_predictions():
    url = "https://www.forebet.com/en/football-tips-and-predictions-for-today"
    predictions = []
    
    logger.info(f"Scraping {url}")
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        
        try:
            await page.goto(url, wait_until="domcontentloaded", timeout=60000)
            await page.wait_for_selector(".schema-datatable", timeout=10000)
            html = await page.content()
            
            soup = BeautifulSoup(html, "html.parser")
            rows = soup.select(".schema-datatable .tr_0, .schema-datatable .tr_1")
            
            for row in rows:
                try:
                    home_team_el = row.select_one(".homeTeam span")
                    away_team_el = row.select_one(".awayTeam span")
                    score_el = row.select_one(".ex_pt")
                    prob_el = row.select_one(".prob")
                    
                    if home_team_el and away_team_el and score_el:
                        home_team = home_team_el.text.strip()
                        away_team = away_team_el.text.strip()
                        predicted_score = score_el.text.strip()
                        probability = prob_el.text.strip() if prob_el else None
                        
                        predictions.append({
                            "home_team": home_team,
                            "away_team": away_team,
                            "predicted_score": predicted_score,
                            "probability": probability
                        })
                except Exception as e:
                    logger.warning(f"Error parsing row: {e}")
                    
        except Exception as e:
            logger.error(f"Error fetching predictions: {e}")
        finally:
            await browser.close()
            
    return predictions

if __name__ == "__main__":
    preds = asyncio.run(fetch_forebet_predictions())
    print(f"Fetched {len(preds)} predictions.")
