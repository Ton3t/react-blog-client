import Axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";

function Articulos() {
  const [posts, setPosts] = useState([]);
  const [newPostEditorOpen, setNewPostEditorOpen] = useState(false);
  const [editorTitulo, setEditorTitulo] = useState("");
  const [editorDescripcion, setEditorDescripcion] = useState("");
  const [editorCode, setEditorCode] = useState("");
  const [editorImages, setEditorImages] = useState([]);

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

  async function savedPost(e) {
    e.preventDefault();

    const filesArray = Array.from(editorImages);

    const base64Images = await Promise.all(
        filesArray.map(async (image) => {
            const base64 = await convertToBase64(image);
            return base64;
        })
    )
    const postData = {
      titulo: editorTitulo ? editorTitulo : undefined,
      descripcion: editorDescripcion ? editorDescripcion : undefined,
      code: editorCode ? editorCode : undefined,
      images: base64Images ? base64Images: undefined,
    };

    await Axios.post("http://localhost:5000/posts/", postData);
    getPosts();
    closeEditor();
  }

  async function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(",")[1]);
        reader.onerror = (error) => reject(error);
    }) 
  }

  function closeEditor() {
    setEditorImages([]);
    setEditorTitulo("");
    setEditorDescripcion("");
    setEditorCode("");
    setNewPostEditorOpen(false);
  }

  return (
    <div className="articulos">
      {!newPostEditorOpen && (
        <button onClick={() => setNewPostEditorOpen(true)}>Añadir Post</button>
      )}
      {newPostEditorOpen && (
        <div className="post-editor">
          <form onSubmit={savedPost}>
            <label htmlFor="editor-title">Titulo</label>
            <input
              id="editor-title"
              type="text"
              value={editorTitulo}
              onChange={(e) => setEditorTitulo(e.target.value)}
            />

            <label htmlFor="editor-descripcion">Descripción</label>
            <input
              id="editor-descripcion"
              type="text"
              value={editorDescripcion}
              onChange={(e) => setEditorDescripcion(e.target.value)}
            />

            <label htmlFor="editor-code">Post</label>
            <textarea
              id="editor-code"
              value={editorCode}
              onChange={(e) => setEditorCode(e.target.value)}
            />

            <label htmlFor="editor-images">Imagenes</label>
            <input
              id="editor-images"
              type="file"
              accept="image/"
              onChange={(e) => setEditorImages(e.target.files)}
            />
            <button type="submit">Añadir Post</button>
            <button onClick={closeEditor}>Cancelar</button>
          </form>
        </div>
      )}
      {renderPosts()}
    </div>
  );
}

export default Articulos;
