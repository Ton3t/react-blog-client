import Axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import PostEditor from "./PostEditor";
import "./Articulos.scss";

function Articulos() {
  const [posts, setPosts] = useState([]);
  const [postEditorOpen, setPostEditorOpen] = useState(false);
  const [editPostData, setEditPostData] = useState(null);
 

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const postsRes = await Axios.get("http://localhost:5000/posts");
    setPosts(postsRes.data);
  }

  function editPost(postData) {
    setEditPostData(postData);
    setPostEditorOpen(true);
  }

  function renderPosts() {

    let sortedPosts = [...posts];
    sortedPosts = sortedPosts.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
    })


    return sortedPosts.map((post, i) => {
      return <Post key={i} post={post} getPosts={getPosts} editPost={editPost} />;
    });
  }

  

  return (
    <div className="articulos">
      {!postEditorOpen && (
        <button className="btn-editor-toggle" onClick={() => setPostEditorOpen(true)}>Añadir Post</button>
      )}
      {postEditorOpen && (
        <PostEditor setPostEditorOpen={setPostEditorOpen} getPosts={getPosts} />
      )}
      {renderPosts()}
    </div>
  );
}

export default Articulos;
