function produceDrivingRange(blockRange) {
  return function(startBlock, endblock) {
  let start = parsInt(startBlock);
  let end = parsInt(endblock)
  let result = 0;
      start>=end ? result = start - end : result = start - end
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
  
