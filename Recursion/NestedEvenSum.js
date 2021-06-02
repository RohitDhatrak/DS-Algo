// Write a recursive function that returns the sum of all the even numbers in an object which may contain nested objects.

// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }

// var obj2 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };

// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10

function nestedEvenSum(obj) {
    function isObject(input) {
        return typeof input === "object" && input !== null;
    }

    function isEvenNumber(input) {
        if (typeof input === "number") {
            return input % 2 === 0;
        } else {
            return false;
        }
    }

    const keys = Object.keys(obj);
    if (!keys.length) {
        return 0;
    } else {
        if (isObject(obj[keys[0]])) {
            const nestedObj = obj[keys[0]];
            delete obj[keys[0]];
            return nestedEvenSum(nestedObj) + nestedEvenSum(obj);
        } else {
            const primitive = obj[keys[0]];
            delete obj[keys[0]];
            if (isEvenNumber(primitive)) {
                return primitive + nestedEvenSum(obj);
            } else {
                return 0 + nestedEvenSum(obj);
            }
        }
    }
}
