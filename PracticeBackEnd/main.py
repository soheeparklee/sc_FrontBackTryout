from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    id: int
    content: str


items = ["장보기", "빨래", "요리"]


@app.get("/")
async def rootPage():
    return {"message": "first screen"}


@app.get("/items/")
def read_items():
    return items

### PATH ###


@app.get("/items/{id}")
def read_items_path(id):
    return items[int(id)]


### QUERY ###
@app.get("/items")
def read_items_query(skip: int = 0, limit: int = 10):
    return items[skip:skip+limit]

### REQUEST BODY ###


@app.post("/items")
def post_item(item: Item):
    items.append(item.content)
    return "성공"
