const equation = (a,b) => {
    parseInt(a);
    parseInt(b);
    return  a + b;
}
const equation2 = (a,b,c) => {
    parseInt(a);
    parseInt(b);
    parseInt(c);
    return  a * b - c;
}
const equation3 = (a) => {
    parseInt(a);
    return  a + a + a + a + a;
}

console.log(equation(1, 1));
console.log(equation2(7 , 4 , 2));
console.log(equation3(1));