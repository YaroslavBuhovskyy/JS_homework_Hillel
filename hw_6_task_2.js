const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

// написати функцію findValueByKey(companyName), яка буде приймати значення у вигляді companyName та надавати інформацію про цю subCompany

function findValueByKey(companyName) {
    function findCompanyInfo(object, name) {
        if (object.name === name) {
            return object;
        }

        if (object.clients && Array.isArray(object.clients)) {
            for (let client of object.clients) {
                let result = findCompanyInfo(client, name);
                if (result) {
                    return result;
                }
            }
        }

        return null;
    }

    return findCompanyInfo(company, companyName);
}

let companyInfo = findValueByKey('Клієнт 1');
//let companyInfo = findValueByKey('Клієнт 2');
console.log(companyInfo);