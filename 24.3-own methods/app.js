// filter:
Array.prototype.myFilter = function (callback) {
  const filteredArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      filteredArr.push(this[i]);
    }
  }
  return filteredArr;
};

const myArr = [1, 2, 3, 10, 5, 6, 7, 8];
let result = myArr.myFilter((e) => e > 5);
console.log("myFilter:", result);


//find:
Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return this[i];
    }
  }
};

const myArr2 = [11, 2, 3, 10, 12, 5, 6, 7, 8];
const found = myArr2.myFind((e) => e > 8);
console.log("myFind:", found);
const found2 = myArr2.myFind((e) => e < 4);
console.log("myFind2:", found2);


//reduce:
Array.prototype.myReduce = function (callBackFunc, initial) {
  let i, result;
  if (initial !== undefined) {
    result = initial;
    i = 0;
  } else {
    result = this[0];
    i = 1;
  }
  for (i; i < this.length; i++) {
    //* check to see if the indexes exist
    if (this.hasOwnProperty(i)) {
      result = callBackFunc(result, this[i]);
    }
  }
  return result;
};

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const reduceArr = arr.myReduce((prev, curr) => prev + curr, 1000);
console.log("myReduce:", reduceArr);
