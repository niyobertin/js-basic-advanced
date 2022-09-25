//javascript array methods
//fprEach method

const { join } = require("path");

const numbers = [1, 2, 3, 4, 5, 6];
let sum = 0;
numbers.forEach(iterm => {
    const element = iterm;
    sum += iterm;
    console.log(sum)
})

const letters = ['a', 'b', 'c', 'd', 'b', 'a', 'b', 'c'];

const count = {};

letters.forEach(element => {
    if (count[element]) {
        count[element]++;
    } else {
        count[element] = 1;
    }
})
console.log(count)
console.log('map method \n=================\n');

const number = [1, 2, 3, 4, 5];
const boubleNumber = number.map(mapMethod)
function mapMethod(value, index) {
    return value * index;
}
console.log(boubleNumber);
console.log('dispying total price from product using map method.\n_________________________________\n');

const products = [{
    name: 'laptop',
    price: 1000,
    count: 5
},
{
    name: 'radio',
    price: 1000,
    count: 3
},
{
    name: 'phone',
    price: 1000,
    count: 2
},
{
    name: 'desktop',
    price: 1000,
    count: 8
}];

const totalProductCost = products.map(item => item.price * item.count);
console.log(totalProductCost);
console.log('Filter method\n-------------------------------\n');

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const even = num.filter(item => item % 2 === 0);
console.log(even);

console.log("testing a user with age greter than 18\n++++++++++++++++++++++++\n");

const users = [{
    name: "Bertin",
    age: 19
},
{
    name: "eric",
    age: 10
},
{
    name: "ange",
    age: 20
}]

users.filter((user) => {
    const isFound = user.age > 18;
    if (isFound) {
        console.log(user.name);
    }
});
console.log("concatination (concat)\n^^^^^^^^^^^^^^^^^^^^^^^^^^\n");

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = ['a', 'b', 'c', 'd', 'e'];
const joined = arr1.concat(arr2);
console.log(joined)

console.log('reduce method\n%%%%%%%%%%%%%\n');

const myNumber = [1, 2, 3, 10, 4, 5, 300];

const maxNumber = myNumber.reduce((accumulator, value) => {
    if (accumulator > value) {
        return accumulator
    } else {
        return value;
    };
}, -Infinity);

console.log(`the maximum number from a given numbers is ${maxNumber}`);
const names = ['bertin', 'nikuze', 'eric']

const all = names.reduce((acc, item) => {
    return acc + item
});
console.log(all);

console.log('slice method\n************\n');

const user = ['bertin', 'nikuze', 'nduwayezu', 'ange'];

const present = user.slice(2, 3);
console.log(present)
console.log('splice method\n@@@@@@@@@@@\n');

const students = ['karara', 'karake', 'keza', 'kanakuze'];
//removing some element using splice

const deleted = students.splice(1, 2, "kanyana", 'kaneza');
console.log(deleted)
console.log(students);
// adding new element 

students.splice(2, 0, 'kanyombya', 'emmy', 2, 3);
console.log(students);
