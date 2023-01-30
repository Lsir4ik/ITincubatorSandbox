function isIsogram(str){

    if (str === '') {
        return true;
    } else {

        const lettersObj = {}

        for (const strElement of str.toLowerCase()) {
            if (lettersObj.hasOwnProperty(strElement)) {
                return false;
            } else {
                lettersObj[strElement] = 1;
            }
        }
        return true;
    }
}

console.log(isIsogram("Moose"));

// function isIsogram(str){
//     return new Set(str.toUpperCase()).size == str.length;
// }