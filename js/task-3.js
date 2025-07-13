//function getElementWidth(content, padding, border) {
//  return parseFloat(content) + 2 * (parseFloat(padding) + parseFloat(border));
//}

/*
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
*/

/*function fakeBin(x) {

  for (let i = 0; i <= x; i++) {
    if (x[i] < 5) {
      return x.replace(x, 0);
    } else {
      return x.replace(x, 1);
    }
  }
}*/

/*function squareSum(numbers) {
    let newArr = numbers.map((i) => i ** 2);
    let sum = newArr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );

    return sum;
}*/

function fakeBin(x) {
    let result = "";
    for (let i = 0; i < x.length; i++) {
        if (Number(x[i]) < 5) {
            result += "0";
        } else {
            result += "1";
        }
    }
    return result;
}
