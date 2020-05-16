`use strict`


let alphabetUpperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let alphabetLowerCases = "abcdefghijklmnopqrstuvwxyz"
let skipNumber = 13;


const rot13 = function (password) {
    alphabetUpperCases = [...alphabetUpperCases]

    if (password === "" || password === undefined || typeof password !== "string") {
        console.log("Don't be lazy, write a text ☺️")
    }
    password = [...password]
    for (let i = 0; i < password.length; i++) {

        let currentIndex = alphabetUpperCases.indexOf(password[i]) + skipNumber
        if ((currentIndex) === 12) {
            continue;
        }

        if (currentIndex > alphabetUpperCases.length - 1) {
            currentIndex = currentIndex % 26
        }
        password[i] = alphabetUpperCases[currentIndex]
        console.log(alphabetUpperCases[currentIndex])
    }

    return password.join("")
}

console.log(rot13("3pRZEPROGRAMOWANI"))
//CEMRCEBTENZBJNAV

function twoRot13(str) {
    const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    const index = x => input.indexOf(x);
    const translate = x => index(x) > -1 ? output[index(x)] : x;
    return str.split('').map(translate).join('');
}
console.log(twoRot13("3pRZEPROGRAMOWANI"))