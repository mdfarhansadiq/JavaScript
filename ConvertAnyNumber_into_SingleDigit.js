/// *******In the name of Allah******* ///

function singleDigit(a) {
    var b = 0, c = 1, s = "", cnt = 0;
    while (1) {
        s = a.toString();
        if (s.length > 1) {
            while (a) {
                b = a % 10;
                a = parseInt(a / 10);
                c *= b;
            }
            a = c;
            c = 1;
        }
        else
            break;
        cnt++;
    }
    return cnt;
}
console.log(singleDigit(39));
