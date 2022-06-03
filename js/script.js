let palabras = ["ALURA", "AHORCADO", "ORACLE", "HTML", "CSS", "JAVASCRIPT"];

let tablero = document.getElementById("horca").getContext("2d");
let letras = [];
let palabraCorrecta = "";
let errores = 9;

function escojerPalabraSecreta() {
    var palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);
    return palabraSecreta;
}

function dibujarLineas() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    var ancho = 600/palabraSecreta.length;
    for(let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(500 + (ancho * i), 640);
        tablero.lineTo(550 + (ancho * i), 640);
    }
    tablero.stroke();
    tablero.closePath();

}dibujarLineas(escojerPalabraSecreta());

function escribirLetraCorrecta(posicion) {
    tablero.font = "bold 52px Inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";

    var ancho = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[posicion],505 + (ancho * posicion), 620);
}

function escribirLetraIncorrecta(letra, erroresLeft) {
    tablero.font = "45px Inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#495057";

    tablero.fillText(letra, 535 +(40 * (10 - erroresLeft)), 710, 40);
}

function verficarLetraClicada(key) {
    if (letras.length < 1 || letras.indexOf(key) < 0){
        letras.push(key);
        return false;
    } else {
        letras.push(key);
        return true;
    }
}

function adicionarLetraCorrecta(index) {
    palabraCorrecta += palabraSecreta[index].toUpperCase();
}

function adicionarLetraIncorrecta(letter) {
    if (palabraSecreta.indexOf(letter) <= 0){
        errores -= 1;
    }
}

document.onkeydown = (e) => {
    let letra = e.key.toUpperCase();
    if(!verficarLetraClicada(e.key)){
        console.log(letras);
        if(palabraSecreta.includes(letra)){
            console.log(letra);
            adicionarLetraCorrecta(palabraSecreta.indexOf(letra))
            for(let i = 0; i < palabraSecreta.length; i++){
                if(palabraSecreta[i] === letra){
                    escribirLetraCorrecta(i);
                }
            }
        } else {
            if (!verficarLetraClicada(e.key)) return 
            console.log(letras);
            adicionarLetraIncorrecta(letra)
            escribirLetraIncorrecta(letra, errores);
        }
    }
};

