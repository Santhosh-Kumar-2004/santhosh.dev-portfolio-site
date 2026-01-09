from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from core.session import get_db
from models import Project
from schemas import ProjectOut

router = APIRouter(prefix="/api/projects", tags=["Projects"])

@router.get("/", response_model=list[ProjectOut])
def get_projects(db: Session = Depends(get_db)):
    return db.query(Project).all()
