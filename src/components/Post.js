import React from 'react';

function Post({post}) {
  return (
    <div className='post'>
        {post.titulo && <h2>{post.titulo}</h2>}
        {post.descripcion && <p>{post.descripcion}</p>}
        {post.code && (
            <pre>
                <code>{post.code}</code>
            </pre>
        )}
        {post.images && post.images.map((image, i) => {
            console.log(image);
            <img src={image} alt={`alt de la imagen ${post.titulo}`}></img>
        })}
    </div>
  )
}

export default Post;