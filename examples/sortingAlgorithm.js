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