const pantallaPrincipal = document.getElementById("pantalla-principal");
const iniciarJuego = document.getElementById("iniciar-juego");
const btnDesistir = document.getElementById("btn-desistir");
const btnNuevoJuego = document.getElementById("btn-nuevo-juego");
const pantallaCanvas = document.getElementById("container-canvas");
const btnPalabraNueva = document.getElementById("agregar-palabra");
const palabraNuevaContainer = document.getElementById("palabra-nueva");

iniciarJuego.addEventListener("click", function () {
    pantallaPrincipal.classList.remove("container-btn");
    pantallaPrincipal.classList.add("oculto");
    pantallaCanvas.classList.remove("oculto");
    pantallaCanvas.classList.add("canvas");
    dibujarBase();
    ahorcado();
});

btnDesistir.addEventListener("click", function () {
    pantallaCanvas.classList.remove("canvas");
    pantallaCanvas.classList.add("oculto");
    pantallaPrincipal.classList.remove("oculto");
    pantallaPrincipal.classList.add("container-btn");
    limpiarCanvas();
});

btnNuevoJuego.addEventListener("click", function () {
    limpiarCanvas();
    dibujarBase();
    ahorcado();
});

btnPalabraNueva.addEventListener("click", function () {
    pantallaPrincipal.classList.remove("container-btn");
    pantallaPrincipal.classList.add("oculto");
    palabraNuevaContainer.classList.remove("oculto");
    palabraNuevaContainer.classList.add("ingresar-palabra");
});

