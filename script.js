const animal={
    type:"dog",
    breed:'labrador',
    age: 5
};
console.log(animal);

const car={
    make:'toyota',
    model:'camry',
    year:'2020',
};
console.log(car);

function reverseString(str) {
    return str.split('').reverse() .join(''); 
}
const originalString = "Hello, World!";
const reversedString = reverseString(originalString); 
console.log(reversedString);