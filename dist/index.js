const currentTemp = document.getElementById("currentTemp");
const message = document.getElementById("message");
const tempForm = document.getElementById("tempForm");

tempForm.addEventListener("submit", event => {
    event.preventDefault();

    const temp = Number(currentTemp.value);

    if (temp > 30) {
        message.textContent = "It's hot";
    }
    else if (temp >= 20 && temp <= 30) {
        message.textContent = "It's warm";
    }
    
    else if (temp < 20) {
        message.textContent = "It's cold";
    }
})

// NOTE: In JavaScript, comparisons like 20 <= temp <= 30 don’t work as expected because JavaScript evaluates them from left to right.

// Here's what happens:

// First, it evaluates 20 <= temp, which returns a boolean (either true or false).
// Then, it compares that boolean value (true or false) to 30, which is not the intended logic.

