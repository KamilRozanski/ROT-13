`use strict`


let alphabetUpperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let alphabetLowerCases = "abcdefghijklmnopqrstuvwxyz"
let skipNumber = 13;


const rot13 = function (password) {
    alphabetUpperCases = [...alphabetUpperCases]
    alphabetLowerCases = [...alphabetLowerCases]

    if (password === "" || password === undefined || typeof password !== "string") {
        console.log("Don't be lazy, write a text ☺️")
    }
    password = [...password]
    for (let i = 0; i < password.length; i++) {
        if (parseInt(password[i]) || parseInt(password[i]) === 0) {
            continue;
        }

        if (alphabetLowerCases.includes(password[i])) {
            password[i] = cipher(alphabetLowerCases)
        } else {
            password[i] = cipher(alphabetUpperCases)

        }


        function cipher(alphabet) {
            let currentIndex = alphabet.indexOf(password[i]) + skipNumber

            if (currentIndex > alphabet.length - 1) {
                currentIndex = currentIndex % 26
            }
            return alphabet[currentIndex]
        }
    }

    return password.join("")
}

console.log(rot13("PRZEPROGRaMOWANI przeprogramowani"))
//CEMRCEBTENZBJNAV

// function twoRot13(str) {
//     const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
//     const index = x => input.indexOf(x);
//     const translate = x => index(x) > -1 ? output[index(x)] : x;
//     return str.split('').map(translate).join('');
// }
// console.log(twoRot13("3pRZEPROGRAMOWANI"))