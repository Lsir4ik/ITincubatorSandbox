function squareSum(numbers){
    return numbers.map(num => num**2).reduce((acc, val) => acc+=val, 0);
}

const arr = [3, 2, 2];
console.log(squareSum(arr));