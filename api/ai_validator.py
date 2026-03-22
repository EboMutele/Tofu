import os
import json
import logging
from anthropic import AsyncAnthropic
from dotenv import load_dotenv

load_dotenv()

logger = logging.getLogger(__name__)
client = AsyncAnthropic(api_key=os.getenv("CLAUDE_API_KEY"))

async def validate_premium_picks_with_ai(matches: list) -> list:
    """
    Sends the shortlisted high-confidence matches to Claude AI to 
    construct 2 optimized premium accumulator slips with total odds >= 6.
    """
    if not matches or len(matches) < 4:
        logger.warning("Not enough matches to generate premium slips.")
        return []

    prompt = f"""
    You are an expert football prediction AI. I have a list of pre-filtered matches with rule-based predictions and bookmaker odds.
    Please evaluate these matches for logical consistency and context (e.g., injuries, motivation, historical data).
    Select the best matches and group them into EXACTLY two (2) premium accumulator slips.
    Each accumulator must have a total combined odds of at least 6.0.
    
    Respond ONLY with a JSON array of 2 objects, where each object represents an accumulator slip and contains a "matches" array of match data and "total_odds".
    
    Matches Data:
    {json.dumps(matches, indent=2)}
    """
    
    try:
        if not os.getenv("CLAUDE_API_KEY") or os.getenv("CLAUDE_API_KEY") == "your_claude_api_key":
            logger.warning("CLAUDE_API_KEY not configured. Returning mocked AI response.")
            # Mocked response
            return [
                {"slip_id": 1, "matches": matches[:3], "total_odds": 6.5},
                {"slip_id": 2, "matches": matches[3:6], "total_odds": 7.2}
            ]

        response = await client.messages.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=2048,
            messages=[
                {"role": "user", "content": prompt}
            ]
        )
        
        # Parse logic would typically safely decode json
        ai_response = response.content[0].text
        # Normally parse JSON here
        # return json.loads(ai_response)
        
        return []
        
    except Exception as e:
        logger.error(f"AI Validation entirely failed: {e}")
        return []
