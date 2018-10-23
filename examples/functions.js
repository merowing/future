let func1 = function() {};
function func2() {}
(function() {})();
(function() {}());

//(param) => expression;
let func5 = (name) => `Hello, ${name}!`;
let func5a = name => `Hello, ${name}!`;

let func6 = (name, surname) => {
  let fullName = `Hello, ${name} ${surname}!`;
  return fullName;
}
// якщо немає return, то повернене значення функції буде undefined

// -----
let arr = [1, 4, 0, 10];
let len = arr.length;
let maxValue = 0;
// maxValue = 0 - значення за замовчуванням, якщо не передається
//function getMaxValue(arr, i, maxValue = 0) {
var getMaxValue = (arr, i = arr.length, maxValue = 0) => {
    if(!(arr instanceof Array)) return `${typeof arr} isn't Array!`;

    if(i <= 0) return maxValue;
    maxValue = (maxValue > arr[i]) ? maxValue : arr[i];
    return getMaxValue(arr, --i, maxValue);
}
getMaxValue(arr); // getMaxValue(any, Array.length - 1);

/**
 * quicksort function
 * don't work
 */
let n = 0;
function qSort(arr) {
    let len = arr.length;
    let leftPosition = 0;
    let rigthPosition = 0;

    let first = arr[n];
    for(let i = 1; i < len - 1; i++) {
        if(arr[i] > first) {
            leftPosition = i;
            break;
        }
    }
    for(let j = len - 1; j > 0; j--) {
        if(arr[j] < first) {
            rightPosition = j;
            break;
        }
    }

    return arr;
}
qSort([4,9,1,32,0,24]);