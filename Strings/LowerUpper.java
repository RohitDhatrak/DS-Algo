// convert a string to upper or lower case

public static String toLower(String str) {
    String result = "";
    for (int i = 0; i < str.length(); i++) {
        if (str.charAt(i) >= 'A' && str.charAt(i) <= 'Z')
            result += (char) (str.charAt(i) + ('a' - 'A'));
        else
            result += str.charAt(i);
    }
    return result;
}

public static String toUpper(String str) {
    String result = "";
    for (int i = 0; i < str.length(); i++) {
        if (str.charAt(i) >= 'a' && str.charAt(i) <= 'z')
            result += (char) (str.charAt(i) - ('a' - 'A'));
        else
            result += str.charAt(i);
    }
    return result;
}
