export const header = () => {
  const containerHeader = document.createElement ('header');
  containerHeader.innerHTML = `  
    <img class="logo" src="data/img/logo1.jpeg" alt="Logo de la página">
    <h1>Personajes Del Señor de los Anillos</h1> 
    `;

  return containerHeader;

};