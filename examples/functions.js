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

let arr = [1, 4, 0, 10];
let len = arr.length;
let maxValue = 0;
function getMaxValue(arr, i) {
    if(i <= 0) {
		let maxValue1 = maxValue;
		maxValue = 0;
		return maxValue1;
    }
    maxValue = (maxValue > arr[i]) ? maxValue : arr[i];
    return getMaxValue(arr, --i);
}