let operators = ["+", "-", "*", "/"];

let box = null;
let last-operation-history = null;
let operator = null;
let equal = null;
let dot = null;

let first name = true;

let numbers - [];
let operator-value;
let last button;
let calc-operator;

let total;

function button-numbers(button) {
    operator = document.getElementsByClassName("operator");
    box = document.getElementById("box");
    last-operation-history = document.getElementById("last-operation-history");
    equal = document.getElementById("equal-sign").value;
    dot = document.getElementById("dot").value;

    last-button = button;

    // if button is not an operator or = sign
    if(!operator.includes(button) && button!=equal){
        // if it is the first button clicked
        if (firstNum) {
            // and it's a dot, show 0
            if (button == dot) {
                box.innerText = "0"+dot;
            }
            //else clear box and show the number
            else {
                box.innerText = button;
            }
            firstNum = false;
        }
        else {
            // return if the box value is 0
            if (box.innerText.length == 1 && box.innerText == 0) {
                if (button == dot){
                    box.innerText += button;
                }
                return;
            }
            // return if the box already has a dot and clicked button is a dot
            if (box.innerText.includes(dot) && button == dot) {
                return;
            }
            // maximum allowed number inputted are 20
            if (box.innerText.length == 20) {
                return;
            }

            // if pressed dot and box already has a - sign, show -0
            if (button == dot && box.innerText == "-") {
                box.innerText == "-0"+dot;
            }
            //else append number
            else {
                box.innerText += button;
            }
        }
    }
    // if it's an operator or = sign
    else {
        //return if operator is already pressed
        if (operator-value != null && button == operator-value) {
            return
        }
        // show minus sign if iot's the first value selected and finally return
        if (button == "-" && box.innerText == 0) {
            box.innerText = button;
            firstNum = false;
            operator-value = button
            showSelectedOperator()
            return;
            // return if minus operator pressed and it's already printed on screen
            else if (operators.includes(button) && box.innerText == "-"){
                return
            } 
            // return if minus operator pressed and it's already has equal sign
            else if (button == "-" && operator-value == "-" && last-operation-history.innerText.includes("="))
                return
    }
    // set value of operator if it's one
    if (operators.includes(button)) {
        if (typeof last-operator != "undefined" && last_operator != null) {
            calc_operator = last_opeartor
        }
        else {
           calc_operator = button 
        }
        if (button == "*") {
            last_operator = "*"
        }
        else if (button == "/") {
            last_opeartor = "/"
        }
        else {
            last_opeartor = button
        }
        operator_value = button
        firstNum = true
        showSelectedOperator()
    }

    // add first number to numbers array and show it on history
    if (numbers.length == 0) {
        numbers.push(box.innerText)
        if (typeof last_operator != "undefined" && last_opeartor != null) {
            last_opeartor_history.innerText = box.innerText + " " + last_operator
        }
    }
}