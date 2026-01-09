from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from core.session import get_db
from models import Contact
from schemas import ContactCreate

router = APIRouter(prefix="/api/contact", tags=["Contact"])

@router.post("/")
def create_contact(data: ContactCreate, db: Session = Depends(get_db)):
    contact = Contact(**data.dict())
    db.add(contact)
    db.commit()
    db.refresh(contact)
    return {"message": "Message sent successfully"}
