function getVowels(str){
    const m = str.match(/[aeiou]/gi);
    if (m === null){
        return 0;
    }
    return m.lengyh;
}

console.log(getVowels("seeing"));