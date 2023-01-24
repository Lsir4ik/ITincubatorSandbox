function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        let flag = false;

        for (let j = 0; j < arr[i].length; j++){
            if (arr[i][j] === elem) {
                flag = true;
                break;
            }
        }

        if (!flag) newArr.push(arr[i]);
    }
    // Only change code above this line
    return newArr;
}

console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));