/* 
isNaN - глобальна функція, яка перевіряє чи є значення NaN;
Number.isNaN - метод, який поверне true, якщо значення є строго NaN;
*/

let userInput;
typeof userInput;

function checkIfNaN (userInput) {
    if (typeof userInput !== Number) 
        {console.log('false');}
    if (userInput !== userInput)
        {console.log('true');}
    else {return false;}    
}

checkIfNaN('string');
//isNaN('string');
checkIfNaN(1);
//isNaN(1);
checkIfNaN(100000.0);
//isNaN(100000.0);
checkIfNaN(0);
//isNaN(0);
checkIfNaN('10O'); // тут не второпаю ніяк
//isNaN('10O');
checkIfNaN('100'); // хіба така стрінга не переведеться в число при певних мат операторах?
//isNaN('100');
checkIfNaN(NaN);
//isNaN(NaN);
checkIfNaN(true);
//isNaN(true);
checkIfNaN(null);
//isNaN(null);

/*чернетка

let userInput = 1;
let input = Number(userInput);
if (typeof userInput !== Number || userInput !== userInput) 
{console.log('It\'s a NaN');} 
else {console.log('It\'s a Number');}
*/