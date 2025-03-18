import peliculas from "./peliculas.js";

//const accion = document.getElementById("genero-28");
//const thriller = document.getElementById("genero-53");
//const aventura = document.getElementById("genero-12");

const peliculasAccion = peliculas.filter((Element) =>
  Element.genre_ids.includes(28)
);
const peliculasThriller = peliculas.filter((Element) =>
  Element.genre_ids.includes(53)
);
const peliculasAventura = peliculas.filter((Element) =>
  Element.genre_ids.includes(12)
);

const listaAccion = document.getElementById("listado-accion");
const listaThriller = document.getElementById("listado-thriller");
const listaAventura = document.getElementById("listado-Aventura");

function mostrarPeliculas(genero, peliculasFiltradas) {
  const lista = document.getElementById(genero);
  peliculasFiltradas.forEach((pelicula) => {
    const peliculaDiv = document.createElement("div");
    const imagen = document.createElement("img");
    imagen.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
    const titulo = document.createElement("h5");
    titulo.textContent = pelicula.title;

    peliculaDiv.appendChild(imagen);
    peliculaDiv.appendChild(titulo);
    lista.appendChild(peliculaDiv);
  });
}
mostrarPeliculas("genero-28", peliculasAccion);
mostrarPeliculas("genero-53", peliculasThriller);
mostrarPeliculas("genero-12", peliculasAventura);

console.log(peliculasAccion);
console.log(peliculasAventura);
console.log(peliculasThriller);
