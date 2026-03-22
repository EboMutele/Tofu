from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Enum, Boolean
from sqlalchemy.orm import relationship
import enum
from datetime import datetime
from db import Base

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=False)
    plan_type = Column(String, default="FREE") # FREE, PREMIUM, VIP
    subscription_status = Column(String, default="ACTIVE")
    is_verified = Column(Boolean, default=False)
    is_active = Column(Boolean, default=True)
    verification_token = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class Match(Base):
    __tablename__ = 'matches'
    id = Column(Integer, primary_key=True, index=True)
    league = Column(String, index=True)
    home_team = Column(String)
    away_team = Column(String)
    match_time = Column(String)
    date = Column(DateTime)
    
class Prediction(Base):
    __tablename__ = 'predictions'
    id = Column(Integer, primary_key=True, index=True)
    match_id = Column(Integer, ForeignKey('matches.id'))
    predicted_score = Column(String)
    prediction_type = Column(String)
    confidence = Column(Float, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class Odd(Base):
    __tablename__ = 'odds'
    id = Column(Integer, primary_key=True, index=True)
    match_id = Column(Integer, ForeignKey('matches.id'))
    market = Column(String)
    bookmaker = Column(String)
    odds_value = Column(Float)

class Accumulator(Base):
    __tablename__ = 'accumulators'
    id = Column(Integer, primary_key=True, index=True)
    type = Column(String) # FREE, PREMIUM
    total_odds = Column(Float)
    created_at = Column(DateTime, default=datetime.utcnow)

class AccumulatorPick(Base):
    __tablename__ = 'accumulator_picks'
    id = Column(Integer, primary_key=True, index=True)
    accumulator_id = Column(Integer, ForeignKey('accumulators.id'))
    prediction_id = Column(Integer, ForeignKey('predictions.id'))

class Result(Base):
    __tablename__ = 'results'
    id = Column(Integer, primary_key=True, index=True)
    prediction_id = Column(Integer, ForeignKey('predictions.id'))
    match_result = Column(String)
    status = Column(String, default="PENDING") # WIN, LOSS, PENDING
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
