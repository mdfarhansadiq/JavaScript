/// *******In the name of Allah******* ///

function domainName(a) {
    var b = 0, c = 0, d = "";
    for (var i = 0; i < a.length; i++) {
        if (a[i] === ":") {
            b = i;
            break;
        }
    }
    if (b) {
        if(a[b + 3]==="w" && a[b + 4]==="w" && a[b + 5]==="w")
            c = 3;
        if (c === 3) {
            for (var i = b + 7; i < a.length; i++) {
                if (a[i] !== ".")
                    d += a[i];
                else
                    break;
            }

        }
        else {
            for (var i = b + 3; i < a.length; i++) {
                if (a[i] !== ".")
                    d += a[i];
                else
                    break;
            }
        }
    }
    else if (!b) {
        if(a[0]==="w" && a[1]==="w" && a[2]==="w" && a[3]===".")
            c = 3;
        if (c === 3) {
            for (var i = 4; i < a.length; i++) {
                if (a[i] !== ".")
                    d += a[i];
                else
                    break;
            }
        }
        else {
            for (var i = 0; i < a.length; i++) {
                if (a[i] !== ".")
                    d += a[i];
                else
                    break;
            }
        }
    }
    return d;
}
console.log(domainName("cwwwmn.com"));
