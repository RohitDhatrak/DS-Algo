// print all the possible subsets of the array

function subSets(arr, n) {
    for (let i = 0; i < Math.pow(2, n); i++) {
        for (let j = 0; j < n; j++) {
            if ((i & (1 << j)) > 0) {
                process.stdout.write(arr[j] + " ");
            }
        }
        console.log();
    }
}
