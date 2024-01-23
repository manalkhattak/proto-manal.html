let student = {
    name : 'Manal',
    age : 16,
    siblings : ['Azan','Hiba','Abiha'],
    address : {house : 244, street : 2, sector : 'F8', city : 'Peshawar'},
    course : 'Ai and Chatbot',
    gender : 'Female'
}

for (key in student){
    if (key === 'course' || key === 'gender'){
          document.write(`${key} : ${student[key]}<br>`)
 }
}
// console.log(student['siblings'][0])
// console.log(student['address']['city'])

// *****OBJECT CONSTRUCTOR*****
arr = Array('Manal','Summaya','Sohana')
console.log(arr)

// CONSTRUCTOR FUNCTION
function Person(name,age,gender,cnic){
    this.name = name
    this.age = age
    this.gender = gender
    this.cnic = cnic 
}

let p1 = new Person('manal',16,'female','123444477')
let p2 = new Person('summaya',16,'female','2345678')

function Plan(name,price,space,transfer,pages,discountMonths){
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;
}
Plan.prototype.calcAnnual = function(){
    var bestPrice = this.price;
    var currDate = new Date();
    var thisMonth = currDate.getMonth()+1;

    for (var i = 0; i < this.discountMonths.length; i++){

        if (this.discountMonths[i] === thisMonth){
            bestPrice = this.price*.80;
            break;
        }
    }
    return bestPrice*12
}

myPlan = new Plan('Advance',99.99,1000,5000,500,[6,12])
yourPlan = new Plan('Basic',50.99,100,500,50,[1,6,12])

console.log(myPlan)
console.log(yourPlan)


function checkForLastName(){
    if (document.getElementById("lastNameField").value.length === 0){
        alert("Please enter your last name.")
        return false;
    }
}