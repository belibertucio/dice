const diceCard = document.getElementById("diceCard");
const display = document.getElementById("display");
const icon = document.getElementById("icon");
let iconClass;

function diceRoll(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function updateClass(iconClass) {
    switch (iconClass) {
        case 1:
            icon.className = 'fa-solid fa-dice-one';
            break;
        case 2:
            icon.className = 'fa-solid fa-dice-two';
            break;
        case 3:
            icon.className = 'fa-solid fa-dice-three';
            break;
        case 4:
            icon.className = 'fa-solid fa-dice-four';
            break;
        case 5:
            icon.className = 'fa-solid fa-dice-five';
            break;
        case 6:
            icon.className = 'fa-solid fa-dice-six';
            break;
    }
}

function animate() {
    diceCard.classList.remove('animate');
    diceCard.classList.remove('STOPanimate'); //HOLY FUCK THIS TOOK SO LONG, YOU CAN'T IMAGINE
    void diceCard.offsetWidth;
    diceCard.classList.add('animate');
}

function STOPanimate() {
    diceCard.classList.remove('animate');
    diceCard.classList.add('STOPanimate');
}

diceCard.addEventListener("click", () => {
    animate()
    if (!diceCard.disabled) {
        diceCard.disabled = true;
        setTimeout(() => {
            const rollResult = diceRoll(1, 6);
            display.textContent = rollResult;
            iconClass = rollResult;
            console.log(rollResult);
            updateClass(iconClass);
            diceCard.disabled = false;
            STOPanimate()
        }, 500);
    }
});
