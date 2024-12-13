let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];
let common = [];
for (let i = 0; i < values1.length; i++) {
    for (let index = 0; index < 3; index++) {
        if (values1[i] === values2[index]){
            common.push(values1[i]);
        }
        else if (values1[i] === values3[index]){
            common.push(values1[i]);
        }
        else if (values2[i] === values3[index]){
            common.push(values2[i]);
        }

    }
}
for (let i = 0; i < common.length; i++) {
    console.log("common is ",common[i])
}