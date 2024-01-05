/*arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
написати функцію myBlend(arr), яка перемішуватиме переданий їй масив. 
не створювати новий масив, вже перемішаний, а саме перемішувати той, який їй передали.*/

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffleArray(indicateArray) {
    for (let i = indicateArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        let substitute = indicateArray[i];
        indicateArray[i] = indicateArray[j];
        indicateArray[j] = substitute;
        
       /*let substitute = indicateArray[i];
        indicateArray[i] = indicateArray[j];
        indicateArray.splice(j, 1);*/
    }
}
shuffleArray(arr);
console.log(arr);