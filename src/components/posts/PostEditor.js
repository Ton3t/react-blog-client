import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./PostEditor.scss"

function PostEditor({ getPosts, setPostEditorOpen, editPostData }) {
  const [editorTitulo, setEditorTitulo] = useState("");
  const [editorDescripcion, setEditorDescripcion] = useState("");
  const [editorCode, setEditorCode] = useState("");
  const [editorImages, setEditorImages] = useState([]);

  useEffect(() => {
    if(editPostData) {
        setEditorTitulo(editPostData.titulo ? editPostData.titulo :  "");
        setEditorDescripcion(editPostData.descripcion ? editPostData.descripcion : "");
        setEditorCode(editPostData.code ? editPostData.code : "");
        setEditorImages(editPostData.images ? editPostData.images : []);
    }
  }, [editPostData]);

  async function savedPost(e) {
    e.preventDefault();

    const filesArray = Array.from(editorImages);

    const base64Images = await Promise.all(
      filesArray.map(async (image) => {
        const base64 = await convertToBase64(image);
        return base64;
      })
    );
    const postData = {
      titulo: editorTitulo ? editorTitulo : undefined,
      descripcion: editorDescripcion ? editorDescripcion : undefined,
      code: editorCode ? editorCode : undefined,
      images: base64Images ? base64Images : undefined,
    };

    if(!editPostData) {
        await Axios.post("http://localhost:5000/posts/", postData);

    }
    else {
        await Axios.put(`http://localhost:5000/posts/${editPostData._id}`, postData);
    }

    getPosts();
    closeEditor();
  }

  async function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  }

  function closeEditor() {
    setEditorImages([]);
    setEditorTitulo("");
    setEditorDescripcion("");
    setEditorCode("");
    setPostEditorOpen(false);
  }

  return (
    <div className="post-editor">
      <form className="form" onSubmit={savedPost}>
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
        <button className="btn-save" type="submit">Añadir Post</button>
        <button className="btn-cancel" onClick={closeEditor}>Cancelar</button>
      </form>
    </div>
  );
}

export default PostEditor;
