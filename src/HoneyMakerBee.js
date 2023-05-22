var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey'
  this.honeyPot = 0;
};

// subclass prototype should be an instance of superclass prototype (that delegates failed lookups to it)
HoneyMakerBee.prototype = {
  Object.create(Bee.prototype);
  this.constuctor = HoneyMakerBee;
  this.makeHoney = function() {this.honeyPot += 1};
  this.giveHoney = function() {this.honeyPot -= 1};
};
