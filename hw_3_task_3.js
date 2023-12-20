/*Написати функцію pow(x,y) яка буде приймати 2 числа,
перше це число яке ми будемо зводити у ступінь, друге у яку ступінь.
Наприклад pow(2,3) функція поверне значення 8.*/

function iDoPoweringOfNumber (baseNumber, exponentNumber)
{
    let result = 1;
    let i = 1;
    while (i <= exponentNumber)
    {
        result = result * baseNumber;
        i++;
    }
    return result;
}
console.log(iDoPoweringOfNumber(7, 2));
console.log(iDoPoweringOfNumber(2, 10));
console.log(iDoPoweringOfNumber(5, 0));
console.log(iDoPoweringOfNumber(99, 1));
console.log(iDoPoweringOfNumber(0, 100));

//перевіряю дещо після уроку про примітиви і методи 
console.log(iDoPoweringOfNumber(100, 100));
console.log(Number.isFinite(iDoPoweringOfNumber(100, 100)));
console.log(Number.isSafeInteger(iDoPoweringOfNumber(100, 100)));


//признаюся, що наробив 100500 помилок, поки написав
