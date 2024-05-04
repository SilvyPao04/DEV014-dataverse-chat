//crea una función encargada de generar el contenido de la vista. Esta función debe devolver un elemento DOM para que pueda ser utilizado por el enrutador
import { header } from "../components/Header.js";
import { hero } from "../components/Hero.js";
import { filters } from "../components/Filters.js";
import { renderItems } from "../view.js";
import { data } from "../data/dataset.js";
import { footer } from "../components/Footer.js";



export const home = () => {
  const homeView = document.createElement("div");
    
  const headerElement = header();
  homeView.appendChild(headerElement);

  const heroElement = hero();
  homeView.appendChild(heroElement);
  
  const filtersElement = filters();
  homeView.appendChild(filtersElement);

  const renderItemsElement = renderItems(data);
  homeView.appendChild(renderItemsElement);
  
  const footerElement = footer();
  homeView.appendChild(footerElement);
  
  return homeView;
};
