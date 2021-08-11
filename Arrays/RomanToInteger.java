// 13. Roman to Integer

public static int romanToInt(String s) {
        int total = 0;
        for (int i = 0; i < s.length(); i++) {
            char currentNum = s.charAt(i);
            int value = getIntVal(currentNum);
            if (i < s.length() - 1) {
                char nextNum = s.charAt(i + 1);
                if (getIntVal(currentNum) < getIntVal(nextNum)) {
                    value = getIntVal(nextNum) - getIntVal(currentNum);
                    i++;
                }
            }
            total += value;
        }
        return total;
    }
    
    public static int getIntVal(char c){
        switch(c){
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0;
        }
    }
