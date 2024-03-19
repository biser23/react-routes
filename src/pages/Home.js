import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a mi portfolio</h1>
      <p>Esta es una breve descripción del desarrollador.</p>
      {/* Agrega enlaces a /projects y /resume */}
      <p>
        Visita mis <a href="/projects">proyectos</a> o mi <a href="/resume">currículum</a>.
      </p>
    </div>
  );
};

export default Home;