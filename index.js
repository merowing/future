// this is the test message...

// use callback function

function identifyType(value) {
    let typeValue = typeof value;
    return typeValue;
}

function getTypeof(option, callback) {
    if(typeof callback === 'function') {
        return callback(option);
    }else {
        return option;
    }
}

getTypeof({}, identifyType);

// n!

/**
 * execution context
 * val * (val - 1) * ... * (val - n)
 * 
 */

function n(val) {
    // одинцю можна не перевіряти
    if(val === 2) return val;
    return val * n(val - 1);
}