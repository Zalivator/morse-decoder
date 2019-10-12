const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let length = expr.length;
    let str = '';
    let sign = '';
    let space = '**********';
    let tenOrEleven = '';
    for (let i = 0; i < length; i += 10) {
        sign = expr.slice(i, i + 10);
        if (sign == space) { 
            str += ' ';
        }
        else {
            let signStr = '';
            for (let j = 0; j < sign.length; j += 2) {
                tenOrEleven = sign.slice(j, j + 2);
                if (tenOrEleven == 10) {
                    signStr += '.';
                }
                else if (tenOrEleven == 11) {
                    signStr += '-';
                }
            }
            str += MORSE_TABLE[signStr];
        }
    }

    return str;
}

module.exports = {
    decode
}