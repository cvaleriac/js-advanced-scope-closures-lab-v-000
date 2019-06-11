function produceDrivingRange(blockRange) {
  return function(block1, block2) {
        let b1 = parseInt(block1);
        let b2 = parseInt(block2);
        let result = 0;
        b1>=b2 ? result = b1 - b2 : result = b2 - b1
        if (result <= blockRange) {
            return `within range by ${blockRange - result}`;
        } else {
            return `${result - blockRange} blocks out of range`;
        }  
    }
}

function produceTipCalculator(tip) {
  return function(percentage) {
      return percentage * tip;
  }
}

function createDriver() {
  let driverId = 0;
  return class Driver {
      constructor(name) {
          this.name = name;
          this.id = ++driverId;
      }
  }
}
