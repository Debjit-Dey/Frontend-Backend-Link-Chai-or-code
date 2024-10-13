import express from "express"
const app = express();
const port = process.env.PORT || 4000

app.use(express.static("./dist"));

app.get("/api/post", (req, res)=>{
    const data ={
        "data": [
          {
            "id": 1,
            "title": "First Post",
            "content": "This is the content of the first post."
          },
          {
            "id": 2,
            "title": "Second Post",
            "content": "This is the content of the second post."
          },
          {
            "id": 3,
            "title": "Third Post",
            "content": "This is the content of the third post."
          },
          {
            "id": 4,
            "title": "Fourth Post",
            "content": "This is the content of the fourth post."
          }
        ]
      }
      
    res.json(data);
})

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
})