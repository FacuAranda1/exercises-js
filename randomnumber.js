// Numero aleatorio entre 2 numeros

function randomRange(numeroMin, numeroMax) {

    return  Math.floor(Math.random() * (numeroMax - numeroMin + 1)) + numeroMin;
  
  }
  console.log(randomRange(1, 100)); // Cambiar estos 2 numeros.
