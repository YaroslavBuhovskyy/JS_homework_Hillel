var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

// 1) довіряємо лише gmail.com та yahoo.com
// 2) зробити просту валідацію до @ -> одне, або два слова які можуть містити (латинські букви, цифри) + може бути розділене крапкою (yaroslav.buhovskyy@gmail.com)

//let re = /^[a-zA-Z0-9.]+@(gmail|yahoo).com$/ тут без валідації
let re = /^[a-zA-Z0-9]+\.{0,1}[a-zA-Z0-9]+@(gmail|yahoo).com$/ 

arr.forEach(obj => {
    console.log(re.test(obj.email));
});

// let re = /^[a-zA-Z0-9.{0,1}]+@(gmail|yahoo).com$/ цей скоріше тавтологічний?

