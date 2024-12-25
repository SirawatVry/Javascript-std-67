const arrayOfNumbers = [1,2,3,4];
const sum = arrayOfNumbers.reduce((accmulator,currentValue) =>{
    return accmulator+currentValue
    });
console.log(sum);