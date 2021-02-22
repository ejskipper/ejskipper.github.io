onmessage = function (e) {
    console.log('Worker: Message received from main script');

    const delay = new Promise(res => setTimeout(res, 5000));
    delay.then(() => {

            fetch('https://picsum.photos/200', {
                method: "GET"
            }).then((response) => {
                response.arrayBuffer().then(result => {
                    console.log('Worker: Posting message back to main script');
                    postMessage(result);
                })
            })

        }
    )
}