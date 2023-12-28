/*
Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно. 
    Порахувати кількість парних та непарних серед них. 
    Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? 
    
Приклад функції checkProbabilityTheory(count). 
    Параметр count буде вказувати скільки разів буде генеруватися випадкове число.
*/



/* Етап 1. Створити функцію генерування рандомного числа з діапазону
- Math.random(): генерує випадкове число від 0 (включно) до 1 (виключно)
- (max - min + 1): визначає розмах чисел (1000-100+1) = 901
- признаюсь, що Python у отриманні рандомного числа у діапазоні мені більш зрозумілий ніж JS, напр. random.randint(100, 1000)

Етап 2. Перебрати циклом рандомні числа та визначити їх парність/непарність

Етап 3. Визначити відсоток парних/непарних

Етап 4. Знайти чи відсоткове співвідношення близьке до 50 на 50 (true/false)

*/

function checkProbabilityTheory(count) {
    function randomNumberFromInterval(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let evenNumbers = 0;
    let oddNumbers = 0;

    for (let i = 0; i < count; i++) {
        let randomNumber = randomNumberFromInterval(100, 1000);

        if (randomNumber % 2 === 0) {
            evenNumbers++;
        } else {
            oddNumbers++;
        }
    }

    let evenPart = (evenNumbers / count) * 100;
    let oddPart = (oddNumbers / count) * 100;

    let percentageRatioIs5050 = (evenPart - 50) <= 3 && (oddPart - 50) <= 3;

    return {evenNumbers, oddNumbers, evenPart, oddPart, percentageRatioIs5050};
}

checkProbabilityTheory(10);
checkProbabilityTheory(100);
checkProbabilityTheory(1000);