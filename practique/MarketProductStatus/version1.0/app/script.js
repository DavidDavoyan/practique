// Loops
/* 

0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
9, true, print 9, upadate i to 10
10, FALSE, end loop!

*/

// for (var i = 0; i < 10; i++) {

//     console.log(i);


// }

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// for(var i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }
// for(var i = names.length-1; i >= 0; i--) {
//     console.log(names[i]);
// }

//While Loops

// var i = 0;

// while(i < names.length) {
//     console.log(names[i]);
//     i++;
// }

// for(var i = 1; i <= 5; i++) {

    

//     if(i === 2) {
//         continue;
//     }
//     console.log(i);
// }



// practice
var names = [];
var numbers = [];
var myMoney = 50000;
names = ['Sam', 'John', 'Graham', 'Valter', 'Kevin']

for(var i = 0; i < names.length; i++) {
    numbers[i] = i;
    names[i] = names[i] +' '+ numbers[i]
    if(numbers[i] % 3 == 0 && numbers[i]!== 0) {
        console.log(`We have winner, and the winner is ${names[i]}`)
    }
}

console.log(names)


// var john = {

//     name: 'John',
//     lastname: 'Smith',
//     age: '',
//     yearOfBirth: 1990,
//     calculateAge: function(yearOfBirth) {

//         return 2016 - this.yearOfBirth;
        
//     }

// }
// john.age = john.calculateAge();
// console.log(john)


function plus(a,b,summ) {

    summ = a + b;
    console.log(summ)
    return summ


}

plus(5,6)

var mary = {
    country: 'USA',
    name: 'Mary',
    lastname: 'Smith',
    age: 22,
    
    
}

var userDefine = function(obj) {
    var key = document.getElementById('key');
    var value = document.getElementById('value');
    for(var keys in obj) {
        var firstDefiner = document.createElement('div');
        firstDefiner.innerHTML =keys+ ' : ' + obj[keys];
        firstDefiner.style.textTransform = 'capitalize'
        var secondDefiner = document.createElement('div');
        secondDefiner.innerHTML = keys;

        key.appendChild(firstDefiner);
        // value.appendChild(secondDefiner);
    }
}
userDefine(mary)


//
var arr = [];
var stash = [];
var priceList = [];
window.onload = function() {
    var showStash = document.getElementById('stashInventory');
    document.getElementById('showOveral').addEventListener('click',function(){
        var priceOveral = 0;
        var sum = 0;
        // for(var price in priceList) {
        //     sum = Number(sum + priceList[price]);
            
        // }


        for(var k = 0; k < priceList.length; k++) {

            sum = parseFloat(sum + priceList[k])

        }
        alert('The stash price is '+sum+'$')
        console.log(sum)
    })
    document.getElementById('showStash').addEventListener('click',function(){
        
        
        for(var i = 0; i < arr.length; i++) {
            if(i > 0) {
                stashInventory.innerHTML +=arr[i]+ '<br/>';
            } else if(i == 0) {
                stashInventory.innerHTML = arr[i] + '<br/>';
            }
        }
        // stashInventory.innerHTML = arr;
    })
    document.getElementById('submit').addEventListener('click',function(){
        
        var iValue = document.getElementById('mInput').value;
        
        if(iValue ===" " || iValue ==="") {

            return alert('Please write correct type of pirce :)')
            return false
        } else {

            

        }
        var price = document.getElementById('priceInput').value;
        price = parseFloat(price)

        function adder() {
            arr.push(iValue+" : " + price+'$');
            console.log(iValue+" : " + price+'$'+" ");
            priceList.push(price);
        }

        
        
        adder();
    })

    console.log(arr)
}















// var numbers = [50,60,70]
// var sum = 0;
// for(var i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
// }console.log(sum)


// var Person = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function() {
//         console.log(2016 - this.yearOfBirth);
//     }
// }

// var john = new Person('Mark', 1975, 'teacher');
// john.calculateAge();

// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');





// var Expert = function(name, lastname, yearOfBirth, job) {

//     this.name = name;
//     this.lastname = lastname;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function() {
//         console.log(2016 - yearOfBirth)
//     }

// }


// var john = new Expert('John', 'Smith', 1990, 'Painter');

// john.calculateAge();
// console.log(john);




// var Job = function(name, salary, time) {
//     this.name = name;
//     this.salary = salary;
//     this.time = time;
// }

// var programming = new Job('Programming', '500$', 8);
// console.log(programming)



// var Driver = function(name, yearOfBirth, car) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.car = car;
//     this.calculateAge = function() {

//         console.log(2016 - this.yearOfBirth)


//     }
// }

// var shawn = new Driver('Shawn', 1995, 'Toyota Prado')


// shawn.calculateAge();


// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }


// Person.prototype.calculateAge = function() {
//     console.log(2016 - this.yearOfBirth);
// }


// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// var Worker = function(name, yearOfBirth) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
// }
// Worker.prototype.calculateAge = function() { 
//     console.log(2018 - this.yearOfBirth);
// }
// Worker.prototype.print = function() {
//     console.log(this.name+ " " + this.yearOfBirth)
// }
// var john = new Worker('John', 1974);
// var jane = new Worker('Jane', 1944);
// console.log(john);
// console.log(jane)

// john.print();
// jane.print();


// var City = function(name, population, location) {
//     this.name = name;
//     this.population = population;
//     this.location = location;
// }
// City.prototype.lastname = 'Smith';
// City.prototype.print = function(){

//     console.log('The City is '+this.name+' ' + 'and it has'+' ' + this.population + ' population and this amazing City is in '+''+this.location)

// }
// City.prototype.writer = function() {
//     document.write('The City is '+this.name+' ' + 'and it has'+' ' + this.population + ' population and this amazing City is in ' + this.location + '<br/>' )

// }
// var newyork = new City('New York', 'over 65,000', 'USA');
// var moscow = new City('Moscow', 'over 45,000', 'Russia');
// newyork.print();
// moscow.print();
// newyork.writer();
// moscow.writer();

// console.log(moscow.lastname)
// console.log(newyork.lastname);


//Object.create

// var personProto = {
//     calculateAge: function(){
//         console.log(2016 - this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto) 

// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher'
// john.calculateAge();

// var jane = Object.create(personProto)


// var workProto = {
//     calculateAge: function() {
//         console.log(2018 - this.yearOfBirth)
//     }
// }

// var bob = Object.create(workProto, 
// {
//     name: {value: 'Bob'},
//     yearOfBirth: {value: 1948},
//     job: {value: 'Teacher'}
// });

// console.log(bob)

// bob.calculateAge();


// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job
// }

// var john = new Person('John', 1990, 'teacher');
// console.log(john)

// Person.prototype.calculateAge = function() {
//     console.log(2018- this.yearOfBirth);
// }
// // john.calculateAge();




// // var mProto = {
// //     calculateAge: function(){
// //         console.log(2018 - this.yearOfBirth)
// //     }
// // }

// // var mark = Object.create(mProto, 
// // {
// //     name: {value: 'Mark'},
// //     yearOfBirth: {value: 2006},
// //     job: {value: 'Driver'}

// // });

// // console.log(mark)
// // mark.calculateAge();

// var personProto = {
//     calculateAge: function(){
//         console.log(2018 - this.yearOfBirth)
//     }
// }

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher'

// var jane = Object.create(personProto,
// {
//     name: {value: 'Jane'},
//     yearOfBirth:{value: 1969},
//     job: {value: 'designer'}
// })
// console.log(jane)



// //primitives
// var a = 23;
// var b = a;

// a = 46;
// console.log(a)
// console.log(b)

// //objects

// var obj1 = {
//     name: 'John',
//     age: 26
// };
// var obj2 = obj1;
// obj1.age = 30
// console.log(obj1)
// console.log(obj2)


// //functions
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };

// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco';

// }

// change(age, obj);


// console.log(age);
// console.log(obj)

// var age = 30;
// var obj = {
//     name: 'David',
//     city: 'Yerevan',
// }

// function changer(a, b) {
//     a = 35;
//     b.city = 'New-York';
// }
// changer(age, obj);
// console.log(age);
// console.log(obj)


var years = [1999, 2002, 2006, 1948, 1984];

function arrayCalc(arr,fn) {

    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {

        arrRes.push(fn(arr[i]));

    }

    return arrRes;

}

function calculateAge(el) {
    return 2018 - el
}
var ages = arrayCalc(years, calculateAge)
console.log(ages)

var years1 = [1985,1965,1978,1988,2003]

function calculateYears(arr, fn) {
    var overResult = [];
    for(var i = 0; i < arr.length; i++) {
        overResult.push(fn(arr[i]))
    }
    return overResult
}
function yearCalculate(el){
    return 2018 - el;
}
var myAges = calculateYears(years1,yearCalculate)
console.log(myAges)































































