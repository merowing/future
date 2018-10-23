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
let getMaxValue = (arr, i, maxValue = 0) => {
    if(i <= 0) return maxValue;
    maxValue = (maxValue > arr[i]) ? maxValue : arr[i];
    return getMaxValue(arr, --i, maxValue);
}
getMaxValue(arr, (len - 1)); // getMaxValue(any, Array.length - 1);