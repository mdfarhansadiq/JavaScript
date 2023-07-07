/// *******In the name of Allah******* ///


function deleteDigit(a) {
    var b = 0, c = [], d = 0, e = [], f = 0, g = 0;
    a = a.toString();
    for (var i = 0; i < a.length; i++) {
        b = parseInt(a[i]);
        c.push(b);
    }
    for (var i = 0; i < c.length; i++) {
        f = (c.length) - 2;
        for (var j = 0; j < c.length; j++) {
            if (i !== j) {
                d += (c[j] * (Math.pow(10, f)));
                f--;
            }
        }
        console.log(d);
        e.push(d);
        d = 0;
    }
    var Mx = 0;
    for(var i = 0;i<e.length;i++)
    {
        if(Mx<e[i])
            Mx = e[i];
    }
    return Mx;
}
