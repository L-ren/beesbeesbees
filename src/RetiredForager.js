var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};
RetiredForagerBee.prototype = {
  Object.create(ForagerBee.prototype);
  this.constructor = RetiredForagerBee;
  this.forage = function() {return 'I am too old, let me play cards instead';};
  this.gamble = function() {this.treasureChest.push('treasure');};
}
