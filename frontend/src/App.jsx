import { useEffect, useState } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/post").then((res) => {
      setPosts(res.data.data);
      console.log(posts);
    });
  }, []);

  return (
    <>
      <h1>Post Display</h1>
      <h2>Posts : {posts.length}</h2>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <h4>{post.content}</h4>
        </div>
      ))}
    </>
  );
}

export default App;
