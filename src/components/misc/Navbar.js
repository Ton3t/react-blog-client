import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <img
        src="https://lh3.googleusercontent.com/pw/AP1GczM-yL-jNoqft1lHipcs0PvrEUKFCmumE2mxJfeo6J_PloqYGGoX1g9SXTut2FujIK8wWwUdqJbZIQ1y-2UdfBMwn6qHPXDvIY3nZxrJ9jA5Cxg8CNkAnRW8ScindDmnMNLKw8t9OoKQXRGkVPWY1cPgJvLJD_2djC05zKwiMRXBXqllEZg8cbIk7EjPfQtWwb9HGs65FkZN_LJdFl5xS4_h10Ww0ihkjr7eHO9DVotfgXQXMp-s91bW_j8m-KasdymRVDL7rpbcnOwHsEPB7RWe31I5KhnlhK3Ww8zOAvNKPOCvUnzMPau9Fb0kuTJ8CHUyHTZ3vfMZbpEPvyPOMHLiehtORHhT36Qq_MYNQQZCM_pLvhg6lZpBHGUgxkOsq14v6s-iI0Ds6rlaJ7Y8QTJuFqRPc7_ODDaiCvzSAXPqs9VJ8sl9ASaZqXZbAERrPhXqZLmIarSirCW18GtTuY5PKirZB78Z7U5VS6mIv1lN9OUJ2n7lLoq_8hVKNuM5Q_1LdiOpl3OHUdOuy7aZuxGHpxtABgBQjrOU4QdESwnGy0JhdF8-8mvXZtrW9Fo19h07ri0RP0_w6bNbf6OcfdbAKIc0oMHC3CuaY6yJzJ10jJjDx2DH0KTivGSDgAESEuIoM5heFoWS5kJXhoHRr9a-zKqMGafWITE366QN8Iknf-a9tNFIC9cAl8tgWFz7TPWeUIXtAmhlAla9nbYSQtLefxlNLny5p8BdcwXVCCLdJUuevBEBL--68QcE8SHMxhdM0kbejMjfI0F-sMI-cRTtJMCYUbyuyDoNA8H7f3CujlDZ7llHvGGcnjOTLp1dhu2eJzFcfTrKAsXYaEKGm953vehFn5XABJjpYDdjhk8THidqvY-hfMOAa9A1Vt9azyE-ViXOEJfk2C7LkozxqVXe=w1279-h959-s-no-gm?authuser=0"
        alt="img del creador"
      />{" "}
      <Link to="/">
        <h1>Toneti Blog</h1>
      </Link>
      <Link to="/articulos">Artículos</Link>
      <Link to="/login">Log In</Link>
      <Link to="/register">Registrate</Link>
    </div>
  );
}

export default Navbar;
