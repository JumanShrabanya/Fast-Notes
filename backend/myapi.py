from fastapi import FastAPI

app=FastAPI()

@app.get("/")
def index():
    return {"name":"Juman","age":22,"title":"Shrabanya"}