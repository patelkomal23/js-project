let buttons = document.querySelectorAll('button');
let array = ['+', '-', '*', '/'];
let display = document.querySelector('#display');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerText;
        let displayValue = display.value;
        let last = displayValue.slice(-1);
        let removeLastStr = displayValue.slice(0, -1)
        if (value == '=') {
            display.value = eval(display.value);
        }
        else if (value == 'C') {
            display.value = '';
        }
        else if (array.includes(value)) {
            if (last == value) {
                display.value == display.value;
            }
            else {
                if (array.includes(last)) {
                    display.value = removeLastStr + value;
                }
                else {
                    display.value += value;
                }
            }

        }
        else {
            display.value += value;
        }
    })
})
