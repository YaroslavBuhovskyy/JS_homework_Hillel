/*var services = {
	"стрижка": "60 грн",
	"гоління": "80 грн",
	"Миття голови": "100 грн"
};

"Послуги" можуть додаватися по ходу роботи:

services['Розбити скло'] = "200 грн";

Умови виконання ДЗ

створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
створити метод minPrice() - який повертає мінімальний price
створити метод maxPrice() - який повертає максимальний price
*/

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "миття голови": "100 грн"
  };
  
services['розбити скло'] = "200 грн";
//console.log(services)

var servicesList = {
    services: services,
    
//метод price(), який обчислює та повертає загальну вартість "наданих послуг"
price: function () {
    let totalPrice = 0;
    for (let key in services) {
        let justValue = services[key].replace(' грн','');
        totalPrice = totalPrice + Number(justValue);
    }
    return totalPrice;
  },
//метод minPrice() - який повертає мінімальний price
minPrice: function() {
    let minPrice;
    for (let key in services) {
        let justValue = services[key].replace(' грн','');
        minPrice = Number(justValue);
        break;
      }

    for (let key in services) {
        let justValue = services[key].replace(' грн','');
        if (Number(justValue) < minPrice){
        minPrice = Number(justValue);}
    }
    return minPrice;
  },
    
//метод maxPrice() - який повертає максимальний price
maxPrice: function() {
    let maxPrice;
    for (let key in services) {
        let justValue = services[key].replace(' грн','');
        maxPrice = Number(justValue);
        break;
      }

    for (let key in services) {
        let justValue = services[key].replace(' грн','');
        if (Number(justValue) > maxPrice){
        maxPrice = Number(justValue);}
      }
    return maxPrice;
  },
}  
console.log("Загальна вартість наданих послуг: " + servicesList.price());
console.log("Мінімальна вартість наданих послуг: " + servicesList.minPrice());
console.log("Максимальна вартість наданих послуг: " + servicesList.maxPrice());

//Aлілуя!
