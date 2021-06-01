// Write a function flatten which accepts an array of arrays and returns a new array with all the values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

function flatten(arr) {
    function isArray(element) {
        return Array.isArray(element);
    }

    if (!arr.length) {
        return [];
    } else {
        if (isArray(arr[0])) {
            return [...flatten(arr.shift()), ...flatten(arr)];
        } else {
            return [arr.shift(), ...flatten(arr)];
        }
    }
}
