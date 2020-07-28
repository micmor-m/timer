/*
Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
*/

//take the arguments from the command line without the first two words, and put them into an array 9each word an element)
let timeArray = process.argv.slice(2);

//sort array
timeArray.sort((a, b) => a - b);

//loop each element of the array
let delay = 0;
for (let i = 0; i < timeArray.length; i++) {
  //if a number
  //console.log(timeArray[i])
  //console.log((parseFloat(timeArray[i])
  if ((parseFloat(timeArray[i])  !== "NaN") )
    //if delay is positive
    if (timeArray[i] > 0) {
      //delay is base on the index value
      delay = (parseFloat(timeArray[i]) * 1000);
      setTimeout(() => {
        process.stdout.write('\x07');
      }, delay)
    }
}
