function clearDisplay() {
    document.getElementById("display").value = "0";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    if (display.value === "") display.value = "0";
}

function appendNumber(number) {
    let display = document.getElementById("display");
    if (display.value === "0") {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    let display = document.getElementById("display");
    display.value += " " + operator + " ";
}

function calculate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value.replace(/%/g, '/100'));
    } catch (e) {
        display.value = "Error";
    }
}
