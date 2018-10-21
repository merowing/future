// this is the test message...
window.onload = function() {
    var obj = {
        id: '1234',
        message: 'test message'
    };

    var id = document.getElementById("mainMessage"),
        oMess = obj.message,
        oId = obj.id;

    id.innerText = oMess;
    id.setAttribute('messageId', oId);
}