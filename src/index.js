function decode(input) {
    const mainMap = new Map();
    let message = "";

    mainMap.set("0000001011", "a");
    mainMap.set("0011101010", "b");
    mainMap.set("0011101110", "c");
    mainMap.set("0000111010", "d");
    mainMap.set("0000000010", "e");
    mainMap.set("0010101110", "f");
    mainMap.set("0000111110", "g");
    mainMap.set("0010101010", "h");
    mainMap.set("0000001010", "i");
    mainMap.set("0010111111", "j");
    mainMap.set("0000111011", "k");
    mainMap.set("0010111010", "l");
    mainMap.set("0000001111", "m");
    mainMap.set("0000001110", "n");
    mainMap.set("0000111111", "o");
    mainMap.set("0010111110", "p");
    mainMap.set("0011111011", "q");
    mainMap.set("0000101110", "r");
    mainMap.set("0000101010", "s");
    mainMap.set("0000000011", "t");
    mainMap.set("0000101011", "u");
    mainMap.set("0010101011", "v");
    mainMap.set("0000101111", "w");
    mainMap.set("0011101011", "x");
    mainMap.set("0011101111", "y");
    mainMap.set("0011111010", "z");
    mainMap.set("1111111111", "0");
    mainMap.set("1011111111", "1");
    mainMap.set("1010111111", "2");
    mainMap.set("1010101111", "3");
    mainMap.set("1010101011", "4");
    mainMap.set("1010101010", "5");
    mainMap.set("1110101010", "6");
    mainMap.set("1111101010", "7");
    mainMap.set("1111111010", "8");
    mainMap.set("1111111110", "9");
    mainMap.set("**********", " ");

    str_length = input.length / 10;

    for (let i = 0; i < str_length; i++) {
        let start = i * 10;
        let finish = (i * 10) + 10;
        let word = input.slice(start, finish);

        message = message + mainMap.get(word);
    }

    return message;
}

module.exports = {
    decode
}
