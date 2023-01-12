const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line
    return arr.map(item => `<li class="text-warning">${item}</li>`);
    // Only change code above this line
}

const failuresList = makeList(result.failure);
console.log(failuresList);