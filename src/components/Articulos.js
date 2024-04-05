import Axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import PostEditor from "./PostEditor";

function Articulos() {
  const [posts, setPosts] = useState([]);
  const [newPostEditorOpen, setNewPostEditorOpen] = useState(false);
 

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const postsRes = await Axios.get("http://localhost:5000/posts");
    setPosts(postsRes.data);
  }

  function renderPosts() {

    let sortedPosts = [...posts];
    sortedPosts = sortedPosts.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
    })


    return sortedPosts.map((post, i) => {
      return <Post key={i} post={post} />;
    });
  }

  

  return (
    <div className="articulos">
      {!newPostEditorOpen && (
        <button onClick={() => setNewPostEditorOpen(true)}>Añadir Post</button>
      )}
      {newPostEditorOpen && (
        <PostEditor setNewPostEditorOpen={setNewPostEditorOpen} getPosts={getPosts} />
      )}
      {renderPosts()}
    </div>
  );
}

export default Articulos;
