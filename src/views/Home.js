import { header } from "../components/Header.js";
import { hero } from "../components/Hero.js";
import { filters } from "../components/Filters.js";
import { renderItems } from "../view.js";
import { footer } from "../components/Footer.js";
//import { filterData, filterData2, sortData, computeStats } from "../lib/dataFunctions.js";
import { data } from "../data/dataset.js";

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

