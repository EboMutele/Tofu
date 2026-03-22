def normalize_team_name(name: str) -> str:
    """Standardize team names to match across different sources."""
    if not name:
        return ""
    
    # Common mappings (Betika/SportPesa vs Forebet)
    aliases = {
        "manchester utd": "manchester united",
        "man utd": "manchester united",
        "manchester city": "manchester city",
        "man city": "manchester city",
        "nottm forest": "nottingham forest",
        "spurs": "tottenham hotspur",
        "tottenham": "tottenham hotspur",
    }
    
    normalized = name.lower().strip()
    return aliases.get(normalized, normalized)

def normalize_predictions(raw_data: list) -> list:
    """Process raw scraper data into standardized schema format."""
    normalized = []
    for item in raw_data:
        home = normalize_team_name(item.get("home_team", ""))
        away = normalize_team_name(item.get("away_team", ""))
        score = item.get("predicted_score", "")
        
        home_goals = None
        away_goals = None
        if "-" in score:
            parts = score.split("-")
            if len(parts) == 2 and parts[0].isdigit() and parts[1].isdigit():
                home_goals = int(parts[0])
                away_goals = int(parts[1])
                
        normalized.append({
            "home_team": home,
            "away_team": away,
            "predicted_home_goals": home_goals,
            "predicted_away_goals": away_goals,
            "prediction_probability": item.get("probability")
        })
    return normalized
