//? 2) Write a function called make_avg() which will take an three integers and return the average of those values.

function make_avg(a, b, c) {
  let sum = a + b + c;
  let avg = sum / 3;
  return avg;
}

let result_of_avg = make_avg(14, 32, 35);
console.log(result_of_avg);
