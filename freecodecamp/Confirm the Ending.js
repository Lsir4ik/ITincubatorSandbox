function confirmEnding(str, target) {
    const lenOfTarget = -(target.length);
    return str.slice(lenOfTarget) === target;
}

console.log(confirmEnding("Bastian", "n"));