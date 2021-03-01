document.addEventListener('DOMContentLoaded', function (event) {
    console.log('DOM fully loaded and parsed');

    var rollCount = 0;
    var diceVals = [];

    const rollButton = document.getElementById('roll');
    const rerollButton = document.getElementById('re-roll');
    const nextTurnButton = document.getElementById('next-turn');

    const dice = document.getElementsByClassName("die");
    for (let die of dice) {
        die.addEventListener('click', (event) => {
            die.getAttribute("data-selected") === "false" ? die.setAttribute("data-selected", "true") : die.setAttribute("data-selected", "false")
        });
    }

    rollButton.addEventListener('click', (event) => {
        rollAllDice();

        rollCount = 1;

        rollButton.setAttribute("data-status", "inactive")
        rerollButton.setAttribute("data-status", "active")
        nextTurnButton.setAttribute("data-status", "active")
    });

    rerollButton.addEventListener('click', (event) => {
        rollAllSelectedDice();

        rollCount++;

        if (rollCount >= 3) {
            rerollButton.setAttribute("data-status", "inactive")
        }
    });

    nextTurnButton.addEventListener('click', (event) => {
        rollCount = 0;
        diceVals = [];

        nextTurnButton.setAttribute("data-status", "inactive")
        rollButton.setAttribute("data-status", "active")
    });

    function rollAllDice() {
        for (i = 1; i <= 5; i++) {
            const die = document.getElementById(`die-${i}`)
            const value = Math.floor(Math.random() * 6) + 1

            die.setAttribute("data-value", value);
            die.getElementsByTagName("img")[0].src = `dice-${value}.webp`
            diceVals[i - 1] = value;

            die.setAttribute("data-selected", "false");
        }
        console.log(diceVals);
    }

    function rollAllSelectedDice() {
        for (i = 1; i <= 5; i++) {
            const die = document.getElementById(`die-${i}`)
            if (die.getAttribute("data-selected") === "true") {
                const value = Math.floor(Math.random() * 6) + 1

                die.setAttribute("data-value", value);
                die.getElementsByTagName("img")[0].src = `dice-${value}.webp`
                diceVals[i - 1] = value;

                die.setAttribute("data-selected", "false");
            }
        }
        console.log(diceVals);
    }
});