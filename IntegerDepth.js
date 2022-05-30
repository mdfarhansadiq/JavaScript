///******* In the name of Allah *******///

function computeDepth(a) {
    var b = 0, c = [], cnt = 0;
    for (var i = 0; i <= 9; i++)
        c[i] = 0;
    for (var i = 1; ; i++) {
        var ans = a * i;
        while (ans) {
            b = ans % 10;
            ans = parseInt(ans / 10);
            if (c[b] === 0)
                cnt++, c[b] = 1;
        }
        if (cnt === 10) {
            var j = i;
            break;
        }
    }
    return j;
}
console.log(computeDepth(79));
