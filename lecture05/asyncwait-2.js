function promiseTimeout(ms){
    return new Promise((resolve,reject) =>{
        setTimeout(resolve,ms);
    });
}
async function longRunningOperation(){
    return 42;
}
async function run(){
    console.log("start!!");
    await promiseTimeout(2000);
    const response = await longRunningOperation();
    console.log(response);
    console.log("stop!!");
}
run();