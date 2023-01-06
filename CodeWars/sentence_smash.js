// КАК ТАК ЛЕГКО?
// function smash (args) {
//     let sentence = '';
//     if (args.length != 0) {
//         for (let i = 0; i < (args.length - 1); i++) {
//             sentence += args[i];
//             sentence += ' ';
//         }
//         sentence += args[args.length - 1];
//
//         return sentence;
//     }
//     else {
//         return '';
//     }
// };
function smash (args) {
    return args.join(" ");
}


const words = [];
console.log(smash(words));