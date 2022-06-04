function dibujarBase(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();
    
    
    tablero.moveTo(520, 550);
    tablero.lineTo(930, 550);
    tablero.stroke();
    tablero.closePath();
}dibujarBase();

function dibujarPoste() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    tablero.moveTo(600, 550);
    tablero.lineTo(600, 150);
    tablero.stroke();
    tablero.closePath();

}dibujarPoste();

function dibujarPosteDos() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    tablero.moveTo(600, 150);
    tablero.lineTo(850, 150);
    tablero.stroke();
    tablero.closePath();
}dibujarPosteDos();

function dibujarPosteTres() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    tablero.moveTo(850, 150);
    tablero.lineTo(850, 200);
    tablero.stroke();
    tablero.closePath();
}dibujarPosteTres();

function dibujarCabeza() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    tablero.arc(850, 240, 40,0,Math.PI*2)
    tablero.stroke();
    tablero.closePath();
}dibujarCabeza()

function torso() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    tablero.moveTo(850, 280);
    tablero.lineTo(850, 400);
    tablero.stroke();
    tablero.closePath();
}torso();

function dibujarBrazo() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    tablero.moveTo(850, 285);
    tablero.lineTo(800, 350);
    tablero.stroke();
    tablero.closePath();
}dibujarBrazo();

function dibujarBrazoDos() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath(); 
    
    tablero.moveTo(850, 285);
    tablero.lineTo(900, 350);
    tablero.stroke();
    tablero.closePath();
}dibujarBrazoDos();

function dibujarPierna() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath(); 

    tablero.moveTo(850, 400);
    tablero.lineTo(800, 470);
    tablero.stroke();
    tablero.closePath();    
}dibujarPierna();

function dibujarPiernaDos() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath(); 

    tablero.moveTo(850, 400);
    tablero.lineTo(900, 470);
    tablero.stroke();
    tablero.closePath(); 
}dibujarPiernaDos();