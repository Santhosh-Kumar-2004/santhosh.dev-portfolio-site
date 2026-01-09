from fastapi import FastAPI
from dotenv import load_dotenv
from core.database import Base, engine

load_dotenv()

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Santhosh's Portfolio Site",
    description="The First version of the Santhosh's Portfolio site.",
    version="1.0.0",   
)

@app.get("/api/health")
def health_check():
    return {
        "status": "ok"
    }
