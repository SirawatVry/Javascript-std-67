function getVowels(str) {
    const m = str.match(/[aeiou]/gi);
    console.log(m)
    if(m===null){
        return 0 ;
    }
    return m.length;
}


console.log(getVowels("seeing"));