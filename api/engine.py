from datetime import datetime
import logging

logger = logging.getLogger(__name__)

MAJOR_LEAGUES = [
    "english premier league",
    "la liga",
    "serie a",
    "bundesliga",
    "ligue 1"
]

AVOIDED_SCORES = ["1-1", "1-0", "2-1"]

def apply_prediction_rules(match_data: dict) -> dict:
    """
    Applies Rules 1-5 and league filtering to a normalized match.
    Returns the prediction dict if it passes, otherwise None.
    """
    league = match_data.get("league", "").lower()
    
    # League Filtering
    if league not in MAJOR_LEAGUES:
        return None
        
    time_str = match_data.get("time", "00:00")
    try:
        # Rule 4: Only consider matches starting after 15:00 GMT+3
        # Simplistic time check assuming input format HH:MM
        h, m = map(int, time_str.split(":"))
        if h < 15:
            return None
    except Exception:
        pass
        
    score = f"{match_data.get('predicted_home_goals')}-{match_data.get('predicted_away_goals')}"
    
    # Rule 5: Avoid 1-1, 1-0, 2-1
    if score in AVOIDED_SCORES:
        return None
        
    hg = match_data.get("predicted_home_goals")
    ag = match_data.get("predicted_away_goals")
    
    if hg is None or ag is None:
        return None
        
    prediction_type = None

    # Rule 2: 2-0 -> Team Win
    if hg == 2 and ag == 0:
        prediction_type = "HOME_WIN"
    elif hg == 0 and ag == 2:
        prediction_type = "AWAY_WIN"
        
    # Rule 3: Both >= 2 (e.g. 2-2, 3-2, 3-3)
    elif hg >= 2 and ag >= 2:
        prediction_type = "GG_AND_O25"
        
    # Rule 1: >=3 for one AND <=1 for opponent -> Team Win
    elif hg >= 3 and ag <= 1:
        prediction_type = "HOME_WIN"
    elif ag >= 3 and hg <= 1:
        prediction_type = "AWAY_WIN"
        
    if not prediction_type:
        return None
        
    # Passed all rules
    match_data["prediction_type"] = prediction_type
    return match_data
