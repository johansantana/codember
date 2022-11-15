const TEXT = '11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101';
const format = (text) => {
    const codeArrays = [];
    let currentCode = '';
    text.split('').forEach(c => {
        if (c === ' ') {
            codeArrays.push(c);
            return;
        }
        currentCode += c;
        if (Number(currentCode) >= 97 && Number(currentCode) <= 122) {
            codeArrays.push(currentCode);
            currentCode = '';
        }
    });
    return codeArrays;
};
const decodeASCII = (text) => {
    const codeArrays = format(text);
    return codeArrays
        .map(code => {
        return code === ' ' ? ' ' : String.fromCharCode(Number(code));
    })
        .join('');
};
export const result = decodeASCII(TEXT);
console.log({ result });
//# sourceMappingURL=index.js.map