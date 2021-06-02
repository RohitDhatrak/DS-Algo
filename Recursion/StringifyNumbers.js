// Write a recursive funciton that takes an object and converts all the numbers in that object into a string.

// const obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66,
//         },
//     },
// };

function stringifyNumbers(obj) {
    function isObject(input) {
        return (
            typeof input === "object" && input !== null && !Array.isArray(input)
        );
    }

    function isNumber(input) {
        return typeof input === "number";
    }

    const keys = Object.keys(obj);
    if (!keys.length) {
        return {};
    } else {
        if (isObject(obj[keys[0]])) {
            const key = keys[0];
            const nestedObj = obj[keys[0]];
            delete obj[keys[0]];
            return {
                [key]: stringifyNumbers(nestedObj),
                ...stringifyNumbers(obj),
            };
        } else {
            const key = keys[0];
            const primitive = obj[keys[0]];
            delete obj[keys[0]];
            if (isNumber(primitive)) {
                return { [key]: primitive + "", ...stringifyNumbers(obj) };
            } else {
                return { [key]: primitive, ...stringifyNumbers(obj) };
            }
        }
    }
}
