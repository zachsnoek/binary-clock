const numDigits = 6;

const toBinary = (string) => {
    const binary = (+string).toString(2);
    const numPaddingDigits = numDigits - binary.length;
    const padding = new Array(numPaddingDigits).fill("0").join("");

    return padding + binary;
};

export { toBinary };
