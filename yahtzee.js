document.addEventListener('DOMContentLoaded', function (event) {
    console.log('DOM fully loaded and parsed');

    const rollButton = document.getElementById('roll');
    rollButton.addEventListener('click', (event) => {
        const dice = document.getElementsByClassName('die-image');
        for (let die of dice) {
            const newVal =  Math.floor(Math.random() * 6) + 1
            die.src = `dice-${newVal}.webp`
        }
    });
});
