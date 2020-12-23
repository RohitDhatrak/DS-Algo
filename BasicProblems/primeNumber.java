public static String checkPrime(int n) {
    if(n < 0)
        return "Invalid Input";
    if(n < 2)
        return "It's neither prime nor composite";
    if(n == 2)
        return "It's a prime number";
    for(int i = 3; i <= Math.sqrt(n); i++)
        if(n % i == 0)
            return "It's a composite number";
    return "It's a prime number";
}
