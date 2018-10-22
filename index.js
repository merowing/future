// this is the test message...

// use callback function

function identifyType(value) {
    let typeValue = typeof value;
    console.log(typeValue);
}

function getTypeof(option, callback) {
    if(typeof callback === 'function') {
        callback(option);
    }else {
        console.log(option);
    }
}

getTypeof({}, identifyType);