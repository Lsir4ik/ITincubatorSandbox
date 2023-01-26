function findLongestWordLength(str) {
    const splitedString = str.split(' ');
    let maxLengthOfString = 0;
    for (let word of splitedString) {
        if (word.length > maxLengthOfString) {
            maxLengthOfString = word.length;
        }
    }
    return maxLengthOfString;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");