from fastapi import FastAPI
from dotenv import load_dotenv
from core.database import Base, engine

load_dotenv()

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="OTP Auth Verification System(MVP)",
    description="A simple full-stack authentication MVP using OTP (One-Time Password) instead of passwords.",
    version="0.7.0",   
)

@app.get("/api/health")
def health_check():
    return {
        "status": "ok"
    }
