/**
 * Bubble sort
 */
(function bubble(arr) {
    let len = arr.length;
    for(let i = 0; i < len; i++) {
        for(let j = len - 1; j > i; j--) {
            if(arr[i] > arr[j]) {
                let t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            }
        }
    }
    return arr;
})([3,5,-2,4]);

/**
 * Section sort
 * the point is that you must find max value of array
 */
(function(arr){
    let len = arr.length;
    let maxId = 0;
	let l = 0;
    while(l < len - 1) {
        for(let i = l; i < len; i++) {
            if(arr[maxId] > arr[i]) {
                maxId = i;
            }
        }
        let t = arr[maxId];
        arr[maxId] = arr[l];
        arr[l] = t;
        l += 1;
    }
    return arr;
})([1,3,2,0,-10]);

/**
 * Insertion sort
 * 3,1,2,0
 * 
 * put 1 before 3
 * put 2 between 1 and 3
 * put 0 before 1 2 3
 */
(function(arr) {
    let len = arr.length;
    let position = 0;
    let temp;
    for(let i = 1; i < len; i++) {
        temp = arr[i];
        // знаходимо місце в масиві куди поставити наступний елемент
        // ми робимо порівняння двох одних і тих же самих елементів, щоб оновити position
        for(let j = i; j >= 0; j--) {
            if(temp <= arr[j]) {
                position = j;
            }
        }
        // зміщуємо праворуч всі елементи масиву від знайденої позиції до позиції елементу, який порівнюємо
        for(let q = i; q > position; q--) {
            arr[q] = arr[q - 1];
        }
        arr[position] = temp;
    }
    return arr;
})([3,1,2,-1,4,3,-2]);

/**
 * Merge sort
 * not working yet
 */

/*(function(arr) {
    let l = 0;
    let r = 1;
    function divide(arr, l, r) {
        let len = arr.length;
        if(arr[l] > arr[r] && len > r) {
            let temp = arr[l];
            arr[l] = arr[r];
            arr[r] = arr[l];
        }
        if(len/r <= 1) return arr;
        l += 2;
        r += 2;
        return divide(arr, l, r);
    }
    return divide(arr,0,1) // -> [1,4,2,3]
})([1,4,3,2]);
*/

/**
 * Merge sort. Charter II
 * 
 * We have two arrays and we must merge and sort them.
 * [1,4,3,2] + [6,0,9,7]
 */
(function(arr1, arr2){

})([1,4,3,2], [6,0,9,7]);