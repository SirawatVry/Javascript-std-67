const names = ['justin' , 'Sarah' ,'Christopher'];
console.log('==while==');
let index = 0;
while (index < names.length){
    const name = names[index];
    console.log(name);
    index++;
}

console.log("==For==");
for (let index = 0 ; index < name.length; index++){
    const name = name[index];
    console.log(name);
}

console.log('--for of --');
for (let name of name){
    console.log(name)
}