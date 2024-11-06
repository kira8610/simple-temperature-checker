const currentTemp = document.getElementById("currentTemp");
const message = document.getElementById("message");
const tempForm = document.getElementById("tempForm");

tempForm.addEventListener("submit", event => {
    event.preventDefault();

    const temp = Number(currentTemp.value);

    switch (true) {
        case (temp > 30):
            message.textContent = "It's hot";
            break;
        case (temp >= 20 && temp <= 30):
            message.textContent = "It's warm";
            break;
        case (temp < 20):
            message.textContent = "It's cold";
            break;
    }
})

// A switch statement in JavaScript compares the value of the expression against the values of each case. Since switch doesn't support range conditions directly, you have to check for individual values or patterns. For checking ranges (like temp > 30, temp >= 20 && temp <= 30, etc.), using if/else is the better approach.
