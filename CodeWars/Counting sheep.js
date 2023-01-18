function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(val => val).length
}

const arr = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];

console.log(countSheeps(arr));