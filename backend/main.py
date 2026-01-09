from fastapi import FastAPI
from dotenv import load_dotenv
from core.database import Base, engine
from routers.projects import router as project_router
from routers.contacts import router as contact_router

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

app.include_router(project_router)
app.include_router(contact_router)