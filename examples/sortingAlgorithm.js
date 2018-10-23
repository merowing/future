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