///******* In the name of Allah *******///

function closure01(x)
{
    function closure02(y)
    {
        function closure03(z)
        {
            return (x + y + z);
        }
        return closure03;
    }
    return closure02;
}


var a = closure01(17) /// closure01 returns closure 02
var b = a(27)        /// closure02 returns closure03
var c = b(37)       /// finally closure03 returns the answer
console.log(c);
