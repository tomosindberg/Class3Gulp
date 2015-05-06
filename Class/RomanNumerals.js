// var values = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   M: 1000
// };

// /* numeral    value
// VI    6
// IV    4
// CVL    145
// XIII    13
// CMIL    949
// */

// function convertToNum (numeral) {
//   console.log("Starting..." + numeral);
//   var sum=0;

//   for (var i=0; i < numeral.length; i++){
//     var char1 = numeral[i], char2 = numeral[i+1];
//     console.log("compare = " + values[char1] + " " + values[char2]);

//     if(i+1==numeral.length || (values[char1] >= values[char2])) {
//       sum += values[char1];
//       console.log("add " +values[char1]);
//       console.log("+sum =" + sum);
//     }
//     else {
//       console.log("subtract  " + values[char1]);
//       sum -= values[char1];
//       console.log("-sum =" + sum);
//     }
//   }
//   return sum;
// }

// var sum=0;
// sum = convertToNum("CMIL");
// console.log("NUMBER =", sum);

var values = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  M: 1000
};

/* numeral    value
VI    6
IV    4
CVL    145
XIII    13
CMIL    949
*/

function convertToNum (numeral) {
  console.log("Starting..." + numeral);
  var sum=0;

  for (var i=0; i < numeral.length; i++){
    var char1 = numeral[i],
        char2 = numeral[i+1];
    console.log("compare = " + values[char1] + " " + values[char2]);

    if  (values[char2] > values[char1]){
      console.log("subtract  " + values[char1]);
      sum -= values[char1];
      console.log("-sum =" + sum);
    }
    else {
      sum += values[char1];
      console.log("add " +values[char1]);
      console.log("+sum =" + sum);
    }
  }
  return sum;
}

var sum=0;
sum = convertToNum("XIII");
console.log("NUMBER =", sum);