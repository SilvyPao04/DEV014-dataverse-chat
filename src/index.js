/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/


import {home} from "./views/Home.js";
import {error} from './views/Error.js'; // OJO: Por hacer vista de error
// ... import other views
import { setRootElement, setRoutes, onURLChange } from './router.js';


const viewContainer = document.getElementById("root");

const routes = {
  "/": home,
  "/error": error,
  // ... poner mas rutas dependiendo de mis archivos dentre de views.js asi como home
};

// Asignar las rutas y el elemento raíz dentro del evento DOMContentLoaded
setRoutes(routes);
setRootElement(viewContainer);


// Definir el contenedor de la vista dentro del evento DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  onURLChange(window.location.pathname);
});
  

  
 