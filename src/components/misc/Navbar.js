import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/"><h1>Toneti Blog</h1></Link>
        <Link to="/">Inicio</Link>
        <Link to="/articulos">Artículos</Link>
        <Link to="/login">Log In</Link>
        <Link to="/register">Registrate</Link>
        
    </div>
  );
}

export default Navbar;