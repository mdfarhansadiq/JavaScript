/// *******In the name of Allah*******;

/// Call a function inside a function
function Calc(b)
{
    return (b * b);
}
function squareNum(a)
{
    return Calc(a);
}

console.log(squareNum(7));
