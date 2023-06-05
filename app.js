// Var
var button = document.getElementById("cart-button");
var number = document.querySelector('.number');
var popup = document.querySelector(".popup");
var plus = document.querySelector(".add");
var minus = document.querySelector(".minus");
var background = document.querySelector(".background");
var counter = 0;

// Event Listener
button.addEventListener("click", function (event) {
    if (counter == 0) {
        number.classList.add("popup-open");
        popup.classList.add("popup-open");
        setTimeout(increment, 300);
        console.log("COUNTER 0");
        minus.classList.add("minus-slide");
        plus.classList.add("add-slide");
    }
    if (counter > 0) {
        setTimeout(increment, 300);
        popup.classList.add("popup-open");
        popup.classList.add("popup-two");
        setTimeout(function () {
            background.classList.add("background-color");
            setTimeout(function () {
                background.classList.remove("background-color");
            }, 740);
        }, 739);
        setTimeout(function () {
            popup.classList.remove("popup-two");
        }, 740);
    }
})

minus.addEventListener("click", function () {
    counter--;
    if (counter == 0) {
        number.innerHTML = null;
        number.classList.remove("popup-open");
        popup.classList.remove("popup-open");
        popup.classList.remove("popup-two");
        background.classList.remove("background-color");
        minus.classList.remove("minus-slide");
        plus.classList.remove("add-slide");
    } else {
        popup.classList.add("popup-open");
        popup.classList.add("popup-two");
        setTimeout(function () {
            background.classList.add("background-color");
            setTimeout(function () {
                background.classList.remove("background-color");
            }, 740);
        }, 739);
        setTimeout(function () {
            popup.classList.remove("popup-two");
        }, 740);
        setTimeout(function () {
            number.innerHTML = counter;
        }, 650);

    }

})
plus.addEventListener("click", function () {

    if (counter == 0) {
        number.classList.add("popup-open");
        popup.classList.add("popup-open");
        setTimeout(increment, 640);
        console.log("COUNTER 0");
        minus.classList.add("minus-slide");
        plus.classList.add("add-slide");
    }
    if (counter > 0) {
        setTimeout(increment, 650);

        popup.classList.add("popup-open");
        popup.classList.add("popup-two");
        setTimeout(function () {
            background.classList.add("background-color");
            setTimeout(function () {
                background.classList.remove("background-color");
            }, 740);
        }, 739);
        setTimeout(function () {
            popup.classList.remove("popup-two");
        }, 740);
    }

})

function increment() {
    counter = isNaN(counter) ? 0 : counter;
    counter++;
    number.innerHTML = counter;
}

// Developed By Mohammad Kiaei
