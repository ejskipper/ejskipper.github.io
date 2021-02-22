document.addEventListener('DOMContentLoaded', function (event) {
    console.log('DOM fully loaded and parsed');

    const fetchButton = document.getElementById('fetch');
    fetchButton.addEventListener('click', (event) => {
        document.getElementById('fetch-section').style.display = "block";
        document.getElementById('fetch-title').innerText = "Gonna display a Trump quote";
        document.getElementById('fetch-info').innerHTML = "<p>Loading...</p>"
        fetch('https://api.tronalddump.io/random/quote', {
            method: "GET"
        }).then((response) => {
            response.json().then(result => {
                document.getElementById('fetch-title').innerText = "It's a Trump quote";
                document.getElementById('fetch-info').innerHTML = `<h4>${result.value}</h4>`
            })
        });
    });
});
