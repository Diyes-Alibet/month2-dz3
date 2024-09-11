function findMine(a, b) {
    console.log(Math.min(a, b));
}
findMine(10, 20);
function getStringLength() {
    let inputString = prompt("Введите строку:");
    console.log(inputString.length);
}

getStringLength();

function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case '*':
            console.log(num1 * num2);
            break;
        case '/':
            if (num2 !== 0) {
                console.log(num1 / num2);
            } else {
                console.log("Ошибка: деление на ноль!");
            }
            break;
        default:
            console.log("Неверный оператор");
    }
}



