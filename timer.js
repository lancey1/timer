let seconds = process.argv.splice(2)

const timer = function(seconds) {
  for (let second in seconds) {
    if (seconds[second] >= 0  && seconds[second] !==NaN) {
    setTimeout(() => {process.stdout.write(`This will beep in ${seconds[second]} seconds \n`);}, seconds[second]*1000);
    }
    else {
      return console.log("Error: please enter a valid number")
    }
  }
}

timer(seconds);

