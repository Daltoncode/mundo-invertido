// document.addEventListener("DOMContentLoaded", () => {
//   const button = document.getElementById("toggleTheme");
//   button.addEventListener("click", () => {
//     document.body.classList.toggle("light");
//   });
// });
const button = document.getElementById("toggleTheme");
const container = document.querySelector(".container");

button.addEventListener("click", () => {
  document.body.classList.toggle("light");    // alterna tema claro/escuro
  container.classList.toggle("inverted");     // gira o conteúdo de ponta cabeça
});
