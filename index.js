// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - 42);
}

function distanceFromHqInFeet (blocked) {
  var blocked = Math.abs(blocked - 42);
  return (blocked * 264);
}

function distanceTravelledInFeet(num1, num2) {
return (Math.abs(num1 - num2) * 264);
}

function calculatesFarePrice(start, end) {
  var distance = (Math.abs(start - end) * 264);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * .02;
  } else if (distance > 2000 && distance < 2500) {
    return 25
  } else if (distance > 2500) {
    return 'cannot travel that far';
  }
}
