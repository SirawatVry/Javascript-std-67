function cal(numstr) {
    let num = numstr.split('');
    let finnum = 0; 
    let num2 = "";
    let sym = "+"; 

    for (let i = 0; i < num.length; i++) {
        if (num[i] === "+" || num[i] === "-" || num[i] === "*" || num[i] === "/") {
           
            let numnostr = parseInt(num2); 
            finnum = cal2(sym, numnostr, finnum); 
            sym = num[i]; 
            num2 = ""; 
        } else {
            num2 += num[i]; 
        }
    }

    finnum = cal2(sym, parseInt(num2), finnum);
    return finnum; 
}

function cal2(sym, numnostr, finnum) {
    if (sym === "+") {
        finnum += numnostr;
    } else if (sym === "-") {
        finnum -= numnostr;
    } else if (sym === "*") {
        finnum *= numnostr;
    } else if (sym === "/") {
        finnum /= numnostr;
    }
    return finnum;
}


console.log(cal("1+1"));        
console.log(cal("7*4-2"));     
console.log(cal("1+1+1+1+1"));  
