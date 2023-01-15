// function disemvowel(str) {
//     let myRegex = /[^aeiou]/gi;
//     let res = str.match(myRegex);
//     return res.join('');
// }
// strF = 'What are you, a communist?';
// console.log(disemvowel(strF));

const disemvowel = (str) => {
    let myRegex = /[^aeiou]/gi;
    let res = str.match(myRegex);
    return res.join('');
}

strF = 'What are you, a communist?';
console.log(disemvowel(strF));

// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
// }