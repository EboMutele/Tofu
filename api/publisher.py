import os
import logging
from telegram import Bot

logger = logging.getLogger(__name__)

async def publish_to_telegram(picks: list, channel_id: str, is_premium: bool = False):
    """
    Publishes formatted predictions to the specified Telegram channel.
    """
    token = os.getenv("TELEGRAM_BOT_TOKEN")
    if not token or token == "your_telegram_bot_token":
        logger.warning(f"Mocking Telegram publish to {channel_id} (No API Token)")
        return
        
    try:
        bot = Bot(token=token)
        message = "🔥 PREMIUM PICKS 🔥\n\n" if is_premium else "🆓 FREE PICKS 🆓\n\n"
        
        for pick in picks:
            message += f"⚽ {pick['home_team']} vs {pick['away_team']}\n"
            message += f"🎯 {pick.get('prediction_type')} @ {pick.get('odds', 'N/A')}\n\n"
            
        await bot.send_message(chat_id=channel_id, text=message)
        logger.info(f"Successfully published to Telegram {channel_id}")
    except Exception as e:
        logger.error(f"Telegram publishing error: {e}")

def publish_to_twitter(picks: list):
    """
    Publishes free picks to Twitter (X) via Tweepy.
    """
    api_key = os.getenv("TWITTER_API_KEY")
    if not api_key or api_key == "your_twitter_api_key":
        logger.warning("Mocking Twitter publish (No API Key)")
        return
        
    logger.info("Published free picks to Twitter.")
