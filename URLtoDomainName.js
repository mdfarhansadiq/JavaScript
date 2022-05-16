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
        for (var i = b + 3; i < a.length; i++) {
            if (a[i] === "w") {
                c++;
                if (c === 3)
                    break;
            }
        }
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
        for (var i = 0; i < a.length; i++) {
            if (a[i] === "w") {
                c++;
                if (c === 3)
                    break;
            }
        }
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



var url = "https://www.google.com";


console.log(domainName(url));
