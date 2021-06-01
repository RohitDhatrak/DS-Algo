// Write a function that capitalizes the first letter of every word in an Array

function capitalizeFirst(arr) {
    function capitalize(element) {
        return element[0].toUpperCase() + element.slice(1);
    }

    if (!arr.length) {
        return [];
    } else {
        return [capitalize(arr.shift()), ...capitalizeFirst(arr)];
    }
}
