/*Напишіть програму яка буде приймати два значення, 
перше це одиниця вимірювання (кілометри, години та кілограми), 
друге значення це кількість, а потім переводити ці значення:

Кілометри в метри
години в хвилини
Кілограми в грами
Зробити вивід отриманої інформації у вигляді 
10 км це 10000 м. 
1 г це 60хв. 
1 кг. це 1000 грм. 

Умови виконання ДЗ

В задачі не обов'язково використовувати prompt, просто запишіть значення в зміні
Обов'язково при написані завдання використовуйте switch
Продумати варіант якщо буде введена якась інша одиниця виміру
Мудрувати та створювати валідацію не потрібно
Будь ласка, надайте наступні дані для перевірки вашої роботи:

Додати ДЗ у гілку js_homework2
Вислати вашу гілку*/

let unitMeasurementLength = 'кілометри';
let unitMeasurementTime = 'години';
let unitMeasurementWeight = 'кілограми';

let unitMeasurement = prompt('Введіть одиницю вимірювання:')
/*if (unitMeasurement != unitMeasurementLength && unitMeasurementTime && unitMeasurementWeight) {
    console.log('Будь ласка введіть один із наведених варіантів: кілометри/години/кілограми')
}*/
let inputQuantity = +prompt('Введіть кількість:')

let kmToM = +inputQuantity * 1000;
let hToM = +inputQuantity * 60;
let kgToG = +inputQuantity * 1000;

switch (unitMeasurement) {
    case unitMeasurementLength:
        console.log(+inputQuantity + ' км це ' + kmToM + ' м.')
        break;
    case unitMeasurementTime:
        console.log(+inputQuantity + ' г це ' + +hToM + ' хв.')
        break;
    case unitMeasurementWeight:
        console.log(+inputQuantity + ' кг. це ' + kgToG + ' грм.')
        break;
    default:
        console.log('!Будь ласка введіть один із наведених варіантів: кілометри/години/кілограми')
        break;
}


/*var num = 1;
switch (num) {
    case 1:
        console.log(1)
        break;
    case 3:
    console.log(' три');
    break;
}
*/
