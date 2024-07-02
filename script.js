const n = 20;
let array = [];
const container = document.getElementById("container");

init();

function init() {
    array = [];
    for (let i = 0; i < n; i++) {
        array[i] = Math.random();
    }
    showBars();
}

function play() {
    bubbleSort(array);
}

function bubbleSort(array) {
    let i = array.length;

    function outerLoop() {
        if (i <= 0) return;
        let j = 0;

        function innerLoop() {
            if (j >= i - 1) {
                i--;
                outerLoop();
                return;
            }
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                showBars();
            }
            j++;
            setTimeout(innerLoop, 100); // Delay for animation
        }
        innerLoop();
    }
    outerLoop();
}

function showBars() {
    container.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement("div");
        bar.style.height = array[i] * 100 + "%";
        bar.className = "bar";
        container.appendChild(bar);
    }
}