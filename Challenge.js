// Challenge #1

var x = 1000
var y = 4000
console.log(x+y)

var result = [2 + 10 + 20];
console.log(result)


// Challenge #2

var photography = ["camera", "lens", "flash", "shutter", "fstop"]
console.log(photography[0]);
console.log(photography[3]);


// Challenge #3

var x=20

if(x<100){
  alert("the variable is less than 100");
} else{
  alert("the variable was 200 which is greater than 100");
}

// Challenge #4 I'm confused if this should be an alert or console log

function userName(firstName) {
  return alert("The name entered is " + firstName);
}

userName("Kevin");



// Challenge #5
function openDoor(doorNumber) {
  if (doorNumber === 1) {
    return alert("You Won a Car");
  } else if (doorNumber === 2) {
    return alert("You Won a Zonk");
  } else if (doorNumber === 3) {
    return alert("You Won a Cruise");
  }

}

openDoor(1);
openDoor(2);
openDoor("Kevin");
openDoor(3);
