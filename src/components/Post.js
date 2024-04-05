import React from "react";
import Axios from "axios";

function Post({ post, getPosts }) {

  async function deletePost() {
    await Axios.delete(`http://localhost:5000/posts/${post._id}`)
  }

  return (
    <div className="post">
      {post.titulo && <h2>{post.titulo}</h2>}
      {post.descripcion && <p>{post.descripcion}</p>}
      {post.code && (
        <pre>
          <code>{post.code}</code>
        </pre>
      )}
      {post.images &&
        post.images.map((image, index) => (
            <img key={index} src={`data:image/*;base64,${image}`} alt={`alt de la imagen`} />
          ))}

          <button onClick={deletePost}>Borrar</button>
    </div>
  );
}

export default Post;
