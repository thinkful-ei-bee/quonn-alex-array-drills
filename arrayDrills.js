"use strict";

/* Problem #1 */
function maxNum(arr) {
  let max = arr[0];
  let i = 1;
  while (i < arr.length) {
    if (arr[i] > max) {
      max = arr[i];
    }
    i++;
  }
  return max;
}

/* Problem #2 */
function minNum(arr) {
  let min = arr[0];
  let j = 1;
  while (j < arr.length) {
    if (arr[j] < min) {
      min = arr[j];
    }
    j++;
  }
  return min;
}

/* Problem #3 */
function avg(arr) {
  let avg = 0;
  arr.forEach(function(x) {
    avg += x;
  });
  return avg / arr.length;
}
