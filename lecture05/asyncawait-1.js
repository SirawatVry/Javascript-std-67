const { rejects } = require("assert");

function promuseTimeout(ms){
    return new Promise((resolve , rejects) => {
        setTimeout(resolve, ms);
    });
}
async function run(){
    console.log("Start!!")
    await promuseTimeout(2000);
    console.log("stop!!")
}
console.log('Before run')
run();
console.log('After run')