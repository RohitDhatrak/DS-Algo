// check if the numbers are Pythagorean triplets

function pythagoreanTriplet(a, b, c) {
    let hypo = Math.max(Math.max(a, b), c);
    if (a == hypo) return Math.pow(hypo, 2) == Math.pow(b, 2) + Math.pow(c, 2);
    else if (b == hypo)
        return Math.pow(hypo, 2) == Math.pow(a, 2) + Math.pow(c, 2);
    else return Math.pow(hypo, 2) == Math.pow(b, 2) + Math.pow(a, 2);
}
