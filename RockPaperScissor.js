///******* In the name of Allah *******///

var inputs = readline().split(' ');
const a = inputs[0];
const b = inputs[1];

if((a==="PAPER" && b===a) || (a==="SCISSORS" && b===a) || (a==="ROCK" && b===a))
    console.log("DRAW");
else
{
    if(a==="PAPER" && b==="ROCK")
        console.log("PLAYER1");
    else if(a==="ROCK" && b==="PAPER")
        console.log("PLAYER2");
    if(a==="SCISSORS" && b==="ROCK")
        console.log("PLAYER2");
    else if(a==="ROCK" && b==="SCISSORS")
        console.log("PLAYER1");
    if(a==="SCISSORS" && b==="PAPER")
        console.log("PLAYER1");
    else if(a==="PAPER" && b==="SCISSORS")
        console.log("PLAYER2");
}
