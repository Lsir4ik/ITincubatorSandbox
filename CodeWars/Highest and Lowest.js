function highAndLow(numbers){
    const splitedNumbers = numbers.split(' ');
    return [Math.max(...splitedNumbers), Math.min(...splitedNumbers)].join(' ');
}

console.log(highAndLow("1 9 3 4 -5"));