// 1) довіряємо лише gmail.com та yahoo.com
// 2) зробити просту валідацію до @ -> одне, або два слова які можуть містити (латинські букви, цифри) + може бути розділене крапкою (yaroslav.buhovskyy@gmail.com)

var arr = [
        {
            userName:"Test",
            lastName:"Test",
            email:"test@gmail.com"
        },
            {
            userName:"Test",
            lastName:"Test",
            email:"test.1@gmail.com"
        },
            {
            userName:"Test",
            lastName:"Test",
            email:"t.e.st@yahoo.com"
        },
            {
            userName:"Test",
            lastName:"Test",
            email:"t12@gmail.co"
        },
        {
            userName:"Dmitro",
            lastName:"Porohov",
            email:"dmitro.porohov@yahoo.com"
        },
        {
            userName:"Andrii",
            lastName:"",
            email:"andrii@mail.ru" 
        },
        {
            userName:"Andrii",
            lastName:"",
            email:"1@yahoo.com" 
        },
    ];

const re = /^[a-zA-Z0-9]+\.{0,1}[a-zA-Z0-9]+@(gmail|yahoo).com$/

const result = arr.filter((item) => re.test(item.email));
console.log(result);

//Фільтрація масиву
/*var arr = [2, 8, 4, 12, 34, 3, 51];
var res = arr.filter(checker);
console.log("arr=" + arr);
console.log("res=" + res);

function checker(item) {
    return item > 8;
}*/