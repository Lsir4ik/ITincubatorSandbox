function squareDigits(num){
    const arr = [];
    for (const number of String(num)) {
        arr.push(number**2);
    }
    return Number(arr.join(''));
}

console.log(squareDigits(2112));

// function squareDigits(num){
//     return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
//
// }