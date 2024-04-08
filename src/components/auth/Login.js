import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {

  const [formNombre, setFormNombre] = useState("");
  const [formPassword, setFormPassword] = useState("");

  function closeEditor() {
    setFormNombre("");
    setFormPassword("");
  }

  async function login(e) {
    e.preventDefault();

    const loginData = {
      nombre: formNombre,
      password: formPassword,
    }

    await Axios.post("http://localhost:5000/auth/login", loginData);
    closeEditor();
  }

  return (
    <div className='auth-form'>
      <h2>Registra una nueva cuenta</h2>
      <form className='form' onSubmit={login}>
        <label htmlFor='form-nombre'>Nombre</label>
        <input id='form-nombre' type='text' value={formNombre} onChange={(e) => setFormNombre(e.target.value)} />

        <label htmlFor='form-password'>Password</label>
        <input id='form-password' type='password' value={formPassword} onChange={(e) => setFormPassword(e.target.value)} />

        <button className='btn-submin' type='submit'>Iniciar</button>
      </form>
      <p>¿No tienes una  cuenta? <Link to="/register">Registraté aquí</Link></p>
    </div>
  )
}

export default Login;