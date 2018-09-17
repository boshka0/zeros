module.exports = function getZerosCount(number) {
  // your implementation
  var multiple = 5, lastNum = Math.floor(number/multiple);
  var zeros = lastNum;
  while(lastNum){
    multiple *= 5;
    lastNum = Math.floor(number/multiple);
    zeros += lastNum;
  }
  return zeros;
}
