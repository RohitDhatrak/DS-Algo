function evenOdd(n) {
    if (n < 0) 
        n = -n;
    if (n == 0) 
        return "even";
    if (n == 1) 
        return "odd";
    return 
        evenOdd(n - 2);
}
