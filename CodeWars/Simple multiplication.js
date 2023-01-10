function simpleMultiplication(number) {
    if (number % 2 === 0) return number * 8;
    return number * 9;
}
console.log(simpleMultiplication(3));

/*
Решение от CodeWars
function simpleMultiplication(n){
    return n % 2 == 0 ? n * 8 : n * 9
}
 */