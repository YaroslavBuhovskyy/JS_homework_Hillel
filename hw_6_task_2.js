function findValueByKey(companyName) {
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

    function findCompanyInfo(object, name) {
        if (object.name.toLowerCase() === name.toLowerCase()) {
            return object;
        }

        if (object.clients) {
            for (let i = 0; i < object.clients.length; i++) {
                const result = findCompanyInfo(object.clients[i], name);
                if (result !== null) {
                    return result;
                }
            }
        }

        return null;
    }

    return findCompanyInfo(company, companyName);
}

let companyInfo1 = findValueByKey('Клієнт 1.1');
let companyInfo2 = findValueByKey('Клієнт 1.2');
let companyInfo3 = findValueByKey('Клієнт 1');
let companyInfo4 = findValueByKey('Клієнт 2');
let companyInfo5 = findValueByKey('Клієнт 2.1');
let companyInfo6 = findValueByKey('Клієнт 3');
console.log(companyInfo1);
console.log(companyInfo2);
console.log(companyInfo3);
console.log(companyInfo4);
console.log(companyInfo5);
console.log(companyInfo6);
