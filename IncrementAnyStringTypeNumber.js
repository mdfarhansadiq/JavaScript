/// *******In the name of Allah******* ///

function incrementString(a) {
    var b = "", c = 0, d = 0, e = 0, f = 0, g = "";
    for (var i = 0; i < a.length; i++) {
        if (a[i] >= "0" && a[i] <= "9")
            c++, b += a[i];
    }
    if (c) {

        d = parseInt(b) + 1;
        d = d.toString();
        e = d.length;

        if (c <= e) {
            for (var i = 0; i < a.length; i++) {
                if ((a[i] >= "a" && a[i] <= "z") || (a[i] >= "A" && a[i] <= "Z"))
                    g += a[i];
            }
            g += d;
        }
        else {
            for (var i = 0; i < a.length; i++) {
                if ((a[i] >= "a" && a[i] <= "z") || (a[i] >= "A" && a[i] <= "Z"))
                    g += a[i];
            }
            f = c - e;
            for (i = 1; i <= f; i++)
                g += "0";
            g += d;
        }
    }
    else
        g += (a + "1");
    return g;
}
console.log(incrementString("foobar"));
