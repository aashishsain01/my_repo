const radius = [1,2,3,4,5];
const area = function (radius){
    return Math.PI * radius * radius;
};
const diameter = function (radius){
    return 2 * radius;
};
const plusTwo = function (radius){
    return radius+2;
}
const circumference = function (radius){
    return 2 * Math.PI * radius;
}
const calculate = function(radius, logic){
    const output=[];
    for(let i=0; i < radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calculate(radius, area));
console.log(calculate(radius, diameter));

setTimeout( abc=() => {
    console.log("10 Seconds Delay")
}, 10000);

console.log(calculate(radius, circumference));
console.log(calculate(radius, plusTwo));