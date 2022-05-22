/// *******In the name of Allah******* ///

var num = "56 65 74 100 99 68 86 180 90";
num += " ";
var a = "", b = 0, c = [];
for(var i = 0;i<num.length;i++)
{
    if(num[i]===" ")
        b = parseInt(a), c.push(b), a = "";
    else
        a += num[i];
}
console.log(c);
