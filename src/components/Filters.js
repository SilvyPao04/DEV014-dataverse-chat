export const filters = () => {
  const containerFilters = document.createElement ('div');
  containerFilters.innerHTML = `  
    <h4>Explora el universo épico de El Señor de los Anillos</h4>

    <h5>Encuentra a tus personajes y descubre curiosidades sobre ellos.</h5>

    <div class="barraBuscar">
        <input type="search" placeholder="Buscar">
    </div> 

    <div class="filtros">

      <label for="filtro1"></label>
        <select id="filtro1" name="filtro1" data-testid="select-filter">
          <option value="raza">Raza</option>
          <option value="Hobbit">Hobbit</option>
          <option value="Maia">Maia</option>
          <option value="Hombre">Hombre</option>
          <option value="Elfo">Elfo</option>
          <option value="Enano">Enano</option>
          <option value="Ent">Ent</option>
          <option value="Caballo">Caballo</option>
          <option value="Criatura">Criatura</option>
        </select>

      <label for="filtro2"></label>
        <select id="filtro2" name="filtro2" data-testid="select-filter2">
          <option value="Edad">Edad</option>
          <option value="100">Menos de 100 años</option>
          <option value="100 999">Entre 100 y 999 años</option>
          <option value="2000">2000 años o más</option>
          <option value="Desconocida">Desconocido</option>
        </select>

      <label for="select-sort"></label>
        <select id="select-sort" name="name" itemprop="name" data-testid="select-sort">
          <option value="orden">Orden</option>
          <option value="asc" name="asc">Ascendente</option>
          <option value="desc" name="desc">Descendente</option>
        </select>

        <button id="limpiar" data-testid="button-clear">Borrar filtros</button>
  
    </div>

    <div class="contenedor-botones">
        <button id="mostrar" class="mostrar">Mostrar promedio de edades</button>
    </div>

    <div class="conten-estadisticas"></div>

    `;
    
  return containerFilters;
};