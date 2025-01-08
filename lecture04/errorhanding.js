function criticalcode(){
    throw "throwing an exception";
}
function logError(theException){
    console.log(theException);
}
console.log("\n*******Try..Catch*******\n");
try{
    criticalcode();
}catch (ex){
    console.log("Got an error");
    logError(ex);
}
console.log("\n*******Throwing in Try..Catch*******\n")
try {
    throw"An exception that is thrown every time";
}catch(ex){
    console.log("Gat an error");
    logError(ex);
}
console.log("\n*******Try..Catch..Finally*******\n");
try{
    criticalcode(ex);
}   catch(ex){
        console.log("Got an error");
        logError(ex);
    }finally{
        console.log("code that always will run");
    }
    function hello(){
        console.log("\n*******Throwing Exceptions*******\n")
}