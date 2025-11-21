function caesarCipher(string, shift) {
    let newString = '';
    const cipherAlphabet = CreateCipherAlphabet(shift);
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

    [...string].forEach((letter) => {
        const index = alphabet.indexOf(letter.toLowerCase());
        let cipherLetter = cipherAlphabet[index];
        if (!cipherLetter) {
            newString += letter;
        } else if (letter === letter.toLowerCase()) {
            newString += cipherLetter.toLowerCase();
        } else {
            newString += cipherLetter.toUpperCase();
        }
    });
    return newString;
}

function CreateCipherAlphabet(shiftFactor) {
    const plainAlphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    const end = plainAlphabet.slice(0, shiftFactor);
    const start = plainAlphabet.slice(shiftFactor);
    return start.concat(end);
}

module.exports = caesarCipher;
