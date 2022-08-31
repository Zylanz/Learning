// let peliculaTitulo = "Avengers";
// const peliculaPrecio = 20;
// function setTitulo() {
//   let peliculaTitulo = "Terminator 2";
//   console.log(peliculaTitulo);
//   //   let peliculaTitulo = "Avengers";
// }

// function setPrecio() {
//   const peliculaPrecio = 50;
//   console.log(peliculaPrecio);
//   //   peliculaPrecio = 60;
// }

// setTitulo();
// setPrecio();
// console.log(peliculaTitulo);
// console.log(peliculaPrecio);

// function mostrarPrecio() {
//   let peliculaPrecio = 65;
//   console.log("El precio es: " + peliculaPrecio);
//   console.log(`El precio es: ${peliculaPrecio}`);
// }
// mostrarPrecio();

// let peliculaPrecio = 70;
// const mostrarPrecio = () => console.log(`El precio es: ${peliculaPrecio}`);
// mostrarPrecio();

// let peliculas = [
//   { idPelicula: 1, titulo: "Avatar" },
//   { idPelicula: 2, titulo: "Terminator 2" },
//   { idPelicula: 3, titulo: "Silent Hill" },
// ];

// const mostrarTodas = (peliculas) => {
//   peliculas.map((p) => console.log(p.idPelicula, p.titulo));
// };

// mostrarTodas(peliculas);

// let peliculas = [
//   { idPelicula: 1, titulo: "Avatar" },
//   { idPelicula: 2, titulo: "Terminator 2" },
//   { idPelicula: 3, titulo: "Silent Hill" },
// ];

// let nuevaPelicula = { idPelicula: 20, titulo: "Scarface" };

// const agregarPelicula = () => {
//   let todas = [...peliculas, nuevaPelicula];
//   console.log(todas);
// };

// agregarPelicula();

// const getPhotos = () => {
//   fetch("https://jsonplaceholder.typicode.com/photos")
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// };
// getPhotos();

// const getPhotos = async () => {
//   await fetch("https://jsonplaceholder.typicode.com/photos")
//     .then((response) => response.json())
//     .then((data) => data.map((p) => console.log(p.id, p.title)));

//   document.write("<h2>Ready</h2>");
// };
// getPhotos();
//

// import { getPhotos } from "./Photos.js";

// getPhotos();

// import { getTitle } from "./Photos.js";

// getTitle();
