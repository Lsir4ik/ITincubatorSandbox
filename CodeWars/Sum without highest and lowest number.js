function sumArray(array) {
    if (!array || array.length === 1) {
        return 0;
    } else {
        const indexOfMax = array.indexOf(Math.max(...array));
        array.splice(indexOfMax, 1);
        const indexOfMin = array.indexOf(Math.min(...array));
        array.splice(indexOfMin, 1);
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }
}

const array1 = [-6, 20, -1, 10, -12];
console.log(sumArray(array1));
