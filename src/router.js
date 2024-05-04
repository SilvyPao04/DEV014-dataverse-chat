let ROUTES = {};
let rootElement = "";

export const setRootElement= (el) => {
  rootElement = el;
};

//Esta función asigna el valor del argumento routes al objeto ROUTES. 
//Routes debe ser un objeto (considere verificar que sea un objeto y arrojar un error si no es así).
//Utilice esta función para definir las rutas para su SPA.
export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
  if (typeof routes !== 'object') {
    throw new Error("Las rutas deben ser un objeto.");
  }
  if (!routes['/error']) {
    throw new Error("Debes definir una ruta /error en tus rutas.");
  }
  ROUTES = routes;
};

//una función de utilidad para convertir una cadena de search o query string (ejemplo ?name=Noemi&color=blue) en un objeto para acceder fácilmente a los parámetros de consulta. Convierte el valor de queryString y devuelve un objeto de pares key/value creados a partir de queryString (por ejemplo,{ name: "Noemi", color: "blue" }). Puede hacer esto usando URLSearchParams para convertir la cadena en un tipo de datos iterable. Luego puede usar for...of o Object.fromEntries para crear el objeto a partir del iterable.
const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  const searchParams = new URLSearchParams (queryString);
  // convert URLSearchParams to an object
  const object = Object.fromEntries(searchParams);
  // return the object
  return object;
}


//esta función representa una vista en el elemento raíz especificado. 
//Borra el contenido existente, busca la función de vista para el nombre de ruta y luego busca la vista.
//funciona en routes y llama a la función de vista pasando el valor props como argumento a la vista. 
//Agrega el elemento DOM devuelto por la función de vista al elemento root.
const renderView = (pathname, props = {}) => {
  const root = rootElement;
  root.innerHTML = "";
  if (ROUTES[pathname]) {
    const template = ROUTES[pathname](props);
    root.appendChild(template);
  } else {
    root.appendChild(ROUTES["/error"]());
  }
};

//una función que recibe una ruta, envía un nuevo estado histórico y representa la nueva vista. esta función se utiliza para navegar mediante programación a una nueva ruta dentro del SPA (por ejemplo, hacer clic en botones o enlaces dentro de la aplicación). Actualiza la URL usando window.history.pushState y luego llama a renderView con el pathname y los props dados para mostrar la vista correspondiente.
/*export const navigateTo = (pathname, props = {}) => {
  // push new history state with window.history.pushState
  // render view passing it props
  //linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }))

  // update window history with pushState
  // render the view with the pathname and props
}*/

//una función para manejar cambios de URL con popstate. Cuando la URL cambia, analiza el pathname y search desde la location (window.location) y luego llama a renderView
//esta función está destinada a manejar cambios de URL con popstate y también cuando el app carga la primera vez. Cuando la URL cambia, analiza el pathname y la search desde la location (window.location) y luego llama a renderView. Debes usar queryStringToObject para obtener los parámetros de la cadena de search en formato de objeto para pasar a renderView.
export const onURLChange = (pathname) => {
  const searchURL = window.location.search;
  const objectProps = queryStringToObject(searchURL);
  renderView(pathname, objectProps);
};


