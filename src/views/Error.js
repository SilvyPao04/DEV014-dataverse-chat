import { header } from "../components/Header.js";
import { footer } from "../components/Footer.js";
import { notFound } from "../components/NotFound.js";

export const error = () => {
  const errorView = document.createElement("div");
  errorView.className = "viewError";

  const headerElement = header();
  errorView.appendChild(headerElement);

  const notFoundElement = notFound();
  errorView.appendChild(notFoundElement);

  const footerElement = footer();
  errorView.appendChild(footerElement);

  return errorView;
};
