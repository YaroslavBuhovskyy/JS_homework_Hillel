/*
Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, 8, true), яка приймає чотири аргументи:
- рядок, до якого буде додаватися символ.
- символ, який буде додаватися.
- cкільки додавати символів
- булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте значення 6, то додаєте тільки один символ
*/

let userString;
let userSymbol;
let symbolQuantity;
let symbolPosition;

// спроба 2 з тернарним оператором

function myPadding (userString, userSymbol, symbolQuantity, symbolPosition){
    while (userString.length < symbolQuantity) {
        userString = symbolPosition ? userSymbol + userString : userString + userSymbol;
    }
    return userString;
}
myPadding('Yaryk', '*', 10, true);
myPadding('Yaryk', '*', 2, false); // не повинно працювати тому що довжина userString є більшою?
myPadding('Yaryk', '*', 5, true);
myPadding('Yaryk', '*', 5, false);


// спроба 1

function myPadding(userString, userSymbol, symbolQuantity, symbolPosition) {
    while (userString.length < symbolQuantity) {
        if (symbolPosition === true) {
            userString = userSymbol + userString;} 
        else {userString = userString + userSymbol;}
    }
    return userString;
}
myPadding('Yaryk', '*', 6, true);
myPadding('Yaryk', '*', 6, false);
myPadding('Yaryk', '*', 4, true);
myPadding('Yaryk', '*', 4, false);
