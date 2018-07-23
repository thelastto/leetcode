char* intToRoman(int num) {
    /*based on a solution in discuss*/
    char *a[4] = {"", "M", "MM", "MMM"};
    char *b[10] = {"", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"};
    char *c[10] = {"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"};
    char *d[10] = {"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"};
    char *result = (char *)malloc(sizeof(char)*16);
    strcat(result, a[num / 1000]);
    strcat(result, b[(num % 1000) / 100]);
    strcat(result, c[(num % 100) / 10]);
    strcat(result, d[(num % 10)]);
    
    return result;

}