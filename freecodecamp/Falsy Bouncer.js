function bouncer(arr) {
    const resArr = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]) {
            resArr.push(arr[i]);
        }
    }
    return resArr
}

console.log(bouncer([false, null, 0, NaN, undefined, ""]));