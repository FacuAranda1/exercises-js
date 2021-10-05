function verificarCelular(numero){
    var num = numero;

    if(!isNaN(num)){
        console.log("Es un numero");

        if (num.length==10){
            console.log("Es un numero celular");
        }else{
            console.log ("No es un celular");
            verificarCelular(prompt("El numero ingresado no es un numero correcto, ingrese uno como por ejemplo: 3516545824"));
        }
    }else{
        console.log("No es un numero");
        verificarCelular(prompt("Usted ingreso un texto, ingrese porfavor un numero celular, por ejemplo: 3516545824"));
    }

}


verificarCelular(prompt("Ingrese un numero celular, por ejemplo: 3516545824"));