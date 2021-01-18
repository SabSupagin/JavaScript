function equation(str){
    var operator = "";
    var strnum = "";

    for(var i = 0 ; i < str.length ; i++){  // การแยกเอาเครื่องหมายมาเก็บไว้ในตัวแปร operator และทำเครื่องหมายไว้ใน strnum เพื่อไว้แยกตัวเลขต่่อไป
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

    var snum = strnum.split("|");   //  แยกตัวเลข
    var num = [];
    for(let i = 0 ; i < snum.length ; i++){   
        num.push(parseInt(snum[i]));    // เปลี่ยนตัวเลข str เป็น int แล้วเก็บไว้เป็นสตริง
    }

    var total = num[0];
    for(var i = 1 ; i < num.length ; i++){  //   นำตัวเลขมาดำเนินการ
        if(operator[i-1] == '+'){
            total += num[i];
        }else if (operator[i-1] == '-'){
            total -= num[i];
        }else if (operator[i-1] == '*'){
            total *= num[i];
        }else if (operator[i-1] == '/'){
            total /= num[i];
        }
    }
    return total;
}
console.log(equation("100*10-200/10"));