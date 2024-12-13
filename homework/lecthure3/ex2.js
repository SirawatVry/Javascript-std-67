let furniture = ['Table', 'Chairs', 'Couch'];
let word = ""
for (let i = 0; i < furniture.length; i++) {
    for (let e = 0; e < furniture[i].length; e++) {
        word += furniture[i].charAt(e)
        if (e < furniture[i].length-1){
        word += ","
        }
        
    }
    console.log("result : " , word)
    word = ""
}