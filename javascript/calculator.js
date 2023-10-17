let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        if (b.target.innerText == '=') {
            // Replace 'x' with '*' for evaluation
            string = String(eval(string.replace(/x/, '*')));
            inputBox.value = string;
        }
        // To clear all input
        else if (b.target.innerText == 'AC') {
            string = '';
            inputBox.value = string;
        }
        // To delete one character at a time
        else if (b.target.innerText == 'DEL') {
            string = string.substring(0, string.length - 1);
            inputBox.value = string;
        }
        else if (b.target.innerText == 'x²') {
            // Calculate the square of the current input
            string = String(eval(string + '*' + string));
            inputBox.value = string;
        }
        else {
            string +=  b.target.innerText;
            inputBox.value = string;
        }
    })
})