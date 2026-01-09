from fastapi import FastAPI

app = FastAPI(title="Santhosh Portfolio API")

@app.get("/api/health")
def health_check():
    return {"status": "ok"}
