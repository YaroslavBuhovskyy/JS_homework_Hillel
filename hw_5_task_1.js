/*
Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію). 
Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта. 

Наприклад так:

obj.getInfo(); // Правильна інформація про об'єкт
obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.
Умови виконання ДЗ
Не використовувати методи keys, values, entries
*/

let videoGame = {
    name: "WarTales",
    genre: "Real Time Strategy",
    ageRating: 18,
    getInfo: function (){
        for (let key in videoGame){
            if (typeof videoGame[key] !== 'function') 
            {console.log(key + ": " + videoGame[key]);}
        }
    }
};

// метод getInfo()
videoGame.getInfo();

// додамо нову властивість
videoGame.developer = 'Shiro Games';

// тест на вдалу зміну об'єкта
videoGame.getInfo();




//чернетка

/*
for (let key in objjjjj){
    console.log(key + ': ' + objjjjj[key]);
}
*/

/*
let booksAsimov = {
    author: "Isaac Asimov",
    books: [
        {title: 'Foundation series', genre: 'Science Fiction'},
        {title: 'I, Robot series', genre: 'Science Fiction'},   
        ],
    ageRating: 16
};
*/