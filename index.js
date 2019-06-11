function produceDrivingRange(blockRange) {
  return function(startblock, endblock) {
        let sb = parseInt(startblock);
        let eb = parseInt(endblock);
        let result = 0;
        sb>=eb ? result = sb - eb : result = eb - sb
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
