export const hero = () => {
  const containerHero = document.createElement ('hero');
  containerHero.innerHTML = `  
    <div class="hero">
    <h1>¡Embárcate en la <br> 
      búsqueda del anillo!</h1> 
    <h2>La aventura y la magia te esperan en cada rincón.</h2>
  </div>

  
    <h2>¿Qué diría Frodo si...?</h2>

    <h3>¿Quieres chatear con todos los personajes de la saga? Inicia el chat grupal y descubre sus singulares respuestas.</h3>

    <button id="chatGrupal">Iniciar chat ahora</button>

    <p class="linea"></p>
    `;

  return containerHero;

};