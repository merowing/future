// this is the test message...
const obj = {
    id: '1234',
    message: 'test message',
    [getKey('b')]: true
};

function getKey(b) {
    return `the key is ${b}`;
}

const id = document.getElementById("mainMessage");
const oMess = obj.message;
const oId = obj.id;

id.innerText = oMess;
id.setAttribute('messageId', oId);