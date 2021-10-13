var colores=["red", "green", "blue", "pink", "yellow", "brown", "hotpink", "orange", "gold", "khaki", "fuchsia", "greenyellow", "lime", "olive", "teal", "aquamarine", "royalblue", "sandybrown"];
function aleatorio(minimo,maximo){
    return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
}
var posiZ = 1


var bola1 = document.getElementById('bola1');
var bola2 = document.getElementById('bola2');
var bola3 = document.getElementById('bola3');

bola1.style.left="30px";
bola2.style.left="300px";
bola3.style.left="570px";


function cambiaColor(e){
    posiZ +=1;
    this.style.zIndex=posiZ;
    var color1 = colores[aleatorio(0,colores.length-1)];
    var color2 = colores[aleatorio(0,colores.length-1)];
    var color3 = colores[aleatorio(0,colores.length-1)];

    this.style.background = "linear-gradient(330deg, "+color1+" 30%, "+color2+" 100%)";
    this.style.color=color3;
    this.innerHTML = color1 +"/"+ color2 + "/" + color3;
}
bola1.addEventListener('mousedown', cambiaColor);


function cambiaTamaño(e) {
    posiZ +=1;
    this.style.zIndex=posiZ;
    var nuevoTamano=0.2 * aleatorio(1,10);
    this.style.transform = "scale("+nuevoTamano+")";
}
bola2.addEventListener('mousedown', cambiaTamaño);




function cambiaPosicion(e) {
    posiZ +=1;
    this.style.zIndex=posiZ;
    this.style.left = aleatorio(0,500)+ "px";
    this.style.top = aleatorio(0,500)+ "px";
}
bola3.addEventListener('mouseover', cambiaPosicion);