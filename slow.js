function _arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}


if (window.Worker) {
    const myWorker = new Worker("worker.js");

        myWorker.postMessage("go");
        console.log('Message posted to worker');


var slowCounter = 1;
setInterval(() => {
    document.getElementById('slow-counter').innerHTML = `Waiting for ${slowCounter} seconds`;
    slowCounter ++;
}, 1000)

    myWorker.onmessage = function(e) {
        console.log('Message received from worker');
        document.getElementById('slow-info').innerHTML = `<p>Here it is!</p><img src="data:image/jpg;base64, ${_arrayBufferToBase64(e.data)}" alt="Generic filler picture"/>`
        clearInterval();

    }
} else {
    console.log('Your browser doesn\'t support web workers.')
}
