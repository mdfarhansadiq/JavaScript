///******* In the name of Allah *******///

function getSleepHours(day)
{
    if(day === 'monday')
      return 7;
    else if(day === 'tuesday')
      return 8;
    else if(day === 'wednesday')
      return 9;
    else
      return 6;
}
function getActualSleepHours()
{
    var sum = 0;
    return (getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('friday'));
}
function getIdealSleepHours()
{
    const idealHours = 7;
    return (idealHours * 7);
}
const calculateSleepDebt = () =>{
   var actual = getActualSleepHours();
   var ideal = getIdealSleepHours();
   if(actual === ideal)
      console.log('Perfect Sleep');
    else if(actual > ideal)
      console.log('More Sleep');
    else if(actual < ideal)
      console.log('Get Some Rest');
}
console.log(getActualSleepHours());
console.log(getIdealSleepHours());
calculateSleepDebt();
