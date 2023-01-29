String.prototype.toJadenCase = function () {
    let str = this.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
    }

    return str.join(' ');
};

// String.prototype.toJadenCase = function() {
//     return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
// };