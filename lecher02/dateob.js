const start = Date.now();
console.log('starting timer...');
setTimeout(() => {
   const mills = Date.now() - start
   console.log(`seconds elapsed = ${Math.floor(mills / 1000)}`) 
}, 2000);