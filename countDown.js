// Cuenta atras de numeros positivos..
function countDown(n){
    if (n < 1) {
      return [];
    }else {
      const arr = countDown (n - 1);
      arr.unshift(n);
      return arr;
    }
  
  }
 // countDown();
console.log(countDown(20));
