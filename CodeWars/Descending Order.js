function descendingOrder(n){
    let a = String(n);
    const arr = [];
    for(let i of a) arr.push(i);
    return Number(arr.sort().reverse().join(''));
}
console.log(descendingOrder(123456789));

// function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''))
// }
