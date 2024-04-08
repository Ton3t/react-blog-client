import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Register() {

  const [formNombre, setFormNombre] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const [formPasswordVerify, setFormPasswordVerify] = useState("");
  const [formImg, setFormImg] = useState("");

  function closeEditor() {
    setFormNombre("");
    setFormEmail("");
    setFormPassword("");
    setFormPasswordVerify("");
    setFormImg("");
  }

  async function register(e) {
    e.preventDefault();

    const registerData = {
      nombre: formNombre,
      password: formPassword,
      passwordVerify: formPasswordVerify,
      imagen: formImg
    }

    await Axios.post("http://localhost:5000/auth", registerData);
    closeEditor();
  }

  return (
    <div className='auth-form'>
      <h2>Registra una nueva cuenta</h2>
      <form onSubmit={register}>
        <label htmlFor='form-nombre'>Nombre</label>
        <input id='form-nombre' type='text' value={formNombre} onChange={(e) => setFormNombre(e.target.value)} />

        <label htmlFor='form-email'>Email</label>
        <input id='form-email' type='email' value={formEmail} onChange={(e) => setFormEmail(e.target.value)} />

        <label htmlFor='form-password'>Password</label>
        <input id='form-password' type='text' value={formPassword} onChange={(e) => setFormPassword(e.target.value)} />

        <label htmlFor='form-password'>Password</label>
        <input id='form-passwordVerify' type='text' value={formPasswordVerify} onChange={(e) => setFormPasswordVerify(e.target.value)} />

        <label htmlFor='form-img'>Avatar</label>
        <input id='form-img' type='fyle' value={formImg} onChange={(e) => setFormImg(e.target.value)} />
        
        <button type='submit'>Registrar</button>
      </form>
      <p>¿Ya tienes una  cuenta? <Link to="/login">Iniciar sesión</Link></p>
    </div>
  )
}

export default Register;