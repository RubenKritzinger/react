var nameVar = 'Ruben';
var nameVAr = 'Kritzinger';
console.log('nameVar', nameVar);

let nameLet = 'pieter';
nameLet = 'joun';
console.log('nameLet', nameLet);

const nameConst = 'Frank'
console.log('nameConst', nameConst);

const fullName = 'Ruben Kritzinger';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);