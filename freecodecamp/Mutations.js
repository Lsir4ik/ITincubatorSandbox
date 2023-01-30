function mutation(arr) {
    const lettersInFirst = arr[0].toLowerCase()
    const lettersInSecond = arr[1].toLowerCase()
    for (const letter of lettersInSecond) {
        if (!lettersInFirst.includes(letter)) {
            return false;
        }
    }
    return true;
}

console.log(mutation(["hello", "hey"]));