function totalVolume(){
    var total = 0 ;
    console.log(arguments);
    for(let i = 0 ; i < arguments.length ; i++){
        var mul = 1 ;
        for(let c = 0 ; c < arguments[i].length ; c++){
            mul *= arguments[i][c];
        }
        total += mul;
    }
    return total;
}

console.log(totalVolume([4, 2, 4],[3, 3, 3],[1, 1, 2],[2, 1, 1]));
console.log(totalVolume([2, 2, 2],[2, 1, 1]));
console.log(totalVolume([1, 1, 1]));