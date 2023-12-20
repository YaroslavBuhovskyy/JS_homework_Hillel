/*вирішити двома способами
не потрібно використовувати prompt або щось інше пов'язане з UI

Рішення оформіть у вигляді функції, 
куди передаються два параметри: висота трикутника та символ
Якось так:
drawTriangle(5, *)*/

// Спосіб FOR
function drawRectangularTriangle (triangleHight1, userSymbol1)
{
    for (let i = 0; i < triangleHight1; i++) 
    {
    let stringWhereWillBeWrittenSymbolFromNextLoop = '';
    for (let j = 0; j <= i; j++)
        {
        stringWhereWillBeWrittenSymbolFromNextLoop += userSymbol1
        }
    console.log(stringWhereWillBeWrittenSymbolFromNextLoop);
    }
}
drawRectangularTriangle (5, '*');



//Спосіб While
function drawRectangularTriangle2 (triangleHight2, userSymbol2)
{
    let i = 0;
    while (i < triangleHight2)
    {
        let j = 0;
        let stringWhereWillBeWrittenSymbolFromNextLoop = '';
        //i++;

        while (j <= i)
        {
            stringWhereWillBeWrittenSymbolFromNextLoop += userSymbol2;
            j++;
        }
        i++;
        console.log(stringWhereWillBeWrittenSymbolFromNextLoop);
    }
}
drawRectangularTriangle2 (10, '@')


//Писанина
/*function drawRectTriangle (triangleHight3, userSymbol3, startHight = 0)
{
    if (startHight < triangleHight3)
    {
    let drawSymbol = ''; 
    
        let i = 0;
        while (i <= startHight)
        {
            drawSymbol += userSymbol3;
            i++;
        }
        console.log(drawSymbol);
    }
}
drawRectTriangle (3, '#', )
*/


/*function drawRectangularTriangle(triangleHight, userSymbol) {
    for (var i = triangleHight, userSymbol; i > 0; userSymbol++) {
    console.log(userSymbol);
    i--;
    }
console.log(userSymbol)};
drawRectangularTriangle(5, '*')