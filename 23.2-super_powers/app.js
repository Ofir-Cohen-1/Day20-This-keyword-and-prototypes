const storm = {
  // add code here
  superPower: 'Flying',
  printSuperPower,
};
function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}
storm.printSuperPower();