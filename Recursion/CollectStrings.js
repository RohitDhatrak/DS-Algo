// Write a recursive sunciton that accepts an object and returns an array of all the strings present in the object

// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }

// var obj1 = {
//     outer: 2,
//     obj: {
//         inner: 2,
//         otherObj: {
//             superInner: 2,
//             notANumber: true,
//             alsoNotANumber: "yup",
//         },
//     },
// };

// var obj2 = {
//     a: 2,
//     b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//     c: { c: { c: 2 }, cc: "ball", ccc: 5 },
//     d: 1,
//     e: { e: { e: 2 }, ee: "car" },
// };

// collectStrings(obj) // ["foo", "bar", "baz"])
// console.log(collectStrings(obj1)); // ["yup"]
// console.log(collectStrings(obj2)); // ["ball", "car"]

function collectStrings(obj) {
    function isObject(input) {
        return typeof input === "object" && input !== null;
    }

    function isString(input) {
        return typeof input === "string";
    }

    const keys = Object.keys(obj);
    if (!keys.length) {
        return [];
    } else {
        if (isObject(obj[keys[0]])) {
            const nestedObj = obj[keys[0]];
            delete obj[keys[0]];
            return [...collectStrings(nestedObj), ...collectStrings(obj)];
        } else {
            const primitive = obj[keys[0]];
            delete obj[keys[0]];
            if (isString(primitive)) {
                return [primitive, ...collectStrings(obj)];
            } else {
                return [...collectStrings(obj)];
            }
        }
    }
}
