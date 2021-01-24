let furniture = ['Table' , 'Chairs' , 'Couch'];

function sortStr(array){
    for (let str of array){
        for(let char of str){
            console.log(char);
        }
        console.log(); // create lines
    } 
}

sortStr(furniture);