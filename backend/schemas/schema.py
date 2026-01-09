from pydantic import BaseModel, EmailStr

class ProjectOut(BaseModel):
    id: int
    title: str
    description: str | None = None
    tech_stack: str | None = None
    github_url: str | None = None
    live_url: str | None = None

    class Config:
        orm_mode = True

class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    message: str