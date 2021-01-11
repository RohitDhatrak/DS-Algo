// print all the possible subsets of the array

function subSets(arr) {
    for (let i = 0; i < Math.pow(2, arr.length); i++) {
        for (let j = 0; j < arr.length; j++) {
            if ((i & (1 << j)) > 0) {
                process.stdout.write(arr[j] + " ");
            }
        }
        console.log();
    }
}
