// OBJECT'S PROPERTIES
// let arr = ['manal','summaya','sohana','hoorya']

// var person = {
//     Name : "manal",
//     Age : 16,
// }

// person.siblings = ['azan','hiba','abiha']
// person.address = {House : 50,PostCode : 123456,Street : '4',City : 'Peshawar'}

// console.log(person)

// person.Name = 'Manahil'
// person['Age'] = 17

// OBJECT'S METHODS
// var plan1 = {
//     name : "Basic",
//     price : 3.99,
//     space : 100,
//     transfer : 1000,
//     pages : 10,
//     discountMonths : [12,1]
// }
// function calcAnnual(perc){
//     var bestPrice = plan1.price;
//     var currDate = new Date();
//     var thisMonth = currDate.getMonth()+1;
//     for (var i = 0; i < plan1.discountMonths.length; i++){
//         if (plan1.discountMonths[i] === thisMonth){
//             bestPrice = plan1.price*perc;
//             break;
//         }
//     }
//     return bestPrice*12;
// }
// var annualPrice = calcAnnual(.85);
// console.log(annualPrice)
// console.log(new Date('2024-1-18').getMonth())

// var plan1 = {
//     name : "Basic",
//     price : 3.99,
//     space : 100,
//     tansfer :1000,
//     pages : 10,
//     discountMonths : [12,1],
    
//     calcAnnual : function(perc){
//             var bestPrice = plan1.price;
//             var currDate = new Date();
//             var thisMonth = currDate.getMonth()+1;
//             for (var i = 0; i < plan1.discountMonths.length; i++){
//                if (plan1.discountMonths[i] === thisMonth){
//                     bestPrice = plan1.price*perc;
//                      break;
//                 }
//              }
//           return bestPrice*12;
//          },
//     showProperties : function(){
//         for (key in plan1){
//             console.log(`Keys are ${key} : ${plan1[key]}`)
//         }
//     }
// }
// console.log(plan1.calcAnnual(.50))
// plan1.showProperties()

//  arr = Array(1,2,3,4,5,6) // Array is array constructor
//  arr1 = [1,2,3,4,5,6,7]
//  console.log(arr)
//  console.log(arr1)

// function Plan(name,price,space,transfer,pages){
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.transfer = transfer;
//     this.pages = pages;
//     this.serviceProvider = "Connect"
// }

// myyPlan = new Plan('Advance',10.99,1000,5000,10)
// yourPlan = new Plan('Basic',4.99,300,1000,4)
// console.log(myyPlan)
// console.log(yourPlan)

// function Plan(name,price,space,transfer,pages){
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.transfer = transfer;
//     this.pages = pages;
//     this.serviceProvider = "Connect"
//     this.discountMonths = [1,6,12]
// }
// function Person(name){
//     this.name = name 
// }

// Plan.prototype.calcAnnual = function(percentIfDisc){
//     var bestPrice = this.price;
//     var currDate = new Date();
//     var thisMonth = currDate.getMonth()+1;
// for (var i = 0; i < this.discountMonths.length; i++){
//     if (this.discountMonths[i] === thisMonth){
//         bestPrice = this.price*percentIfDisc;
//         break;
//     }
// }
// return bestPrice*12
// }
// myyPlan = new Plan('Advance',10.99,1000,5000,10)
// yourPlan = new Plan('Basic',4.99,300,1000,4)

// console.log(myyPlan.calcAnnual(.60))



