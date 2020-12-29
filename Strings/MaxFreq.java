// find the character occuring max times in the string

// Time Complexity  O(n)
// Space Complexity O(1)

public static char maxFreq(String str) {
    int[] count = new int[26];
    for (int i = 0; i < str.length(); i++) {
        if (str.charAt(i) >= 'a')
            count[str.charAt(i) - 'a']++;
        if (str.charAt(i) < 'a')
            count[str.charAt(i) - 'A']++;
    }
    int max = 0;
    char ans = 'a';
    for (int i = 0; i < count.length; i++) {
        if (count[i] > max) {
            max = count[i];
            ans = (char)(i + 'a');
        }
    }
    return ans;
}
