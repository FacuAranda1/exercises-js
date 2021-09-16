function aleatorio (minimo,maximo){
    return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
}

 var colores=["red", "green", "blue", "pink", "yellow", "chocolate", "hotpink", "orange", "gold", "khaki", "fuchsia", "greenyellow", "lime", "olive", "teal", "aquamarine", "royalblue", "sandybrown"];


 function verificaNumero(numero){
    var num = numero;
    if(!isNaN(num)){
        for (var i = 0; i <= num; i++) {
            if (i > 0) {
                fabricaCajas(colores[aleatorio(0,colores.length-1)],aleatorio(70,300)); 
            }
        }
        // BOTON
        document.write("<a  style='display:block' class='divContieneBoton' href='ej02.html'>Volver a tirar</a>")
        }else{
            console.log("No es un numero");
            verificaNumero(prompt("Ustede ingreso un texto, no un numero de cajas"));
        }
    }

verificaNumero(prompt("Cuantas cajas desea?"));
 



function fabricaCajas(fondo, tamaño){

    var miCaja = document.createElement("div");
    var contenido = document.createTextNode(fondo);              

    miCaja.appendChild(contenido);
    document.body.appendChild(miCaja);
    
    miCaja.className="divContieneBoton";

    miCaja.style.height = tamaño+"px"; 
    miCaja.style.width =  tamaño+"px";
    miCaja.style.backgroundColor = fondo;
}
// fabricaCajas(colores[aleatorio(0,colores.length-1)],aleatorio(70,300));





