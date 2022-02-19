/// *******In the name of Allah*******;
/// both functions gives same output 
var Arr = [1, 2, 3, 4, 5], store = [];

function sumArr()
{
    var sum = 0;
    for(let i=0;i<Arr.length;i++)
    {
        sum += Arr[i];
        store.push(sum);
    }

    return store;
}
sumArr(...Arr); /// "..." Spread operator to pass an array to a function
console.log(store), console.log("\n");;

var Arr = [1, 2, 3, 4, 5], store = [];

sumArr(...Arr);
console.log(store);
function sumArr()
{
    var sum = 0;
    for(let i=0;i<Arr.length;i++)
    {
        sum += Arr[i];
        store.push(sum);
    }

    return store;
}
