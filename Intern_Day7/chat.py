from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

app= FastAPI()

class Message(BaseModel):
    id:int
    content: str


messages= []

@app.post("/messages")
def send_message(message: Message):
    messages.append(message.content)
    return "message sent"

@app.get("/messages")
def recieve_message():
    return messages

app.mount("/", StaticFiles(directory="static", html=True), name="static")