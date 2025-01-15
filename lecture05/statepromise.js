
const promise = new Promise((resolve,rejects)=>{
    const res = false;
    if(res){
        resolve("Resolved!");
    }else {
        rejects(Error("Fetal Error"))
    }
});
promise.then(
    (res) => console.log(res),
    (err) => console.log(err)
)