let values1 = ['Apple',1,false];
let values2 = ['Fries',2,true];
let values3 = ['Mars',9,'Apple'];

function compare(values1,values2){
    // show detail values1
    for(let index = 0 ; index < values1.length ; index++){
        console.log("values1 index : " , index , " = " , values1[index] , " \ttype = " , typeof(values1[index]));
    }

    // show detail values2
    console.log();
    for(let index = 0 ; index < values2.length ; index++){
        console.log("values2 index : " , index , " = " , values2[index] , " \ttype = " , typeof(values2[index]));
    }

    // Compare values1 , values2
    console.log();
    for(let index = 0 ; index < values1.length ; index++){
        if(typeof(values1[index]) === typeof(values2[index])){
            console.log("values1[" ,index, "] compare values2[",index, "] = true");
        }else {
            console.log("values1[" ,index, "] compare values2[",index, "] = false");
        }
    }
}
compare(values2,values3);