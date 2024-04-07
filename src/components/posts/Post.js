import React from "react";
import Axios from "axios";
import "./Post.scss";

function Post({ post, getPosts, editPost }) {
  async function deletePost() {
    await Axios.delete(`http://localhost:5000/posts/${post._id}`);
    getPosts();
  }

  return (
    <div className="post">
      {post.titulo && <h2 className="titulo">{post.titulo}</h2>}
      {post.descripcion && <p className="descripcion">{post.descripcion}</p>}
      {post.code && <p className="code">{post.code}</p>}
      {post.images &&
        post.images.map((image, index) => (
          <img
            className="img"
            key={index}
            src={`data:image/*;base64,${image}`}
            alt={`alt de la imagen`}
          />
        ))}

      <button className="btn-edit" onClick={() => editPost(post)}>
        Editar
      </button>
      <button className="btn-delete" onClick={deletePost}>
        Borrar
      </button>
    </div>
  );
}

export default Post;
