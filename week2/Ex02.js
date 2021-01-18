function equation(str){
    var operator = "";
    var strnum = "";

    for(var i = 0 ; i < str.length ; i++){ 
        var countNum = 0 ;
        for(var n = 0 ; n < 10 ; n++){
            if(str[i] == n){
                strnum += str[i];
                ++countNum;
            }
            if(n == 9 && countNum == 0){
                operator += str[i];
            }
        }
        if(countNum == 0){
            strnum += "|";
        }
    }

    var snum = strnum.split("|");  
    var number = [];
    for(let i = 0 ; i < snum.length ; i++){   
        number.push(parseInt(snum[i]));   
    }

    var total = number[0];
    for(var i = 1 ; i < number.length ; i++){  
        if(operator[i-1] == '+'){
            total += number[i];
        }else if (operator[i-1] == '-'){
            total -= number[i];
        }else if (operator[i-1] == '*'){
            total *= number[i];
        }
    }
    return total;
}
console.log(equation("1+1+1+1+1"));