// Rango de numeros progresivos..

function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0){
      return [startNum];
    }else {
      var nums = rangeOfNumbers(startNum, endNum - 1);
      nums.push(endNum);
      return nums;
    }
  }

  console.log(rangeOfNumbers(0,10));