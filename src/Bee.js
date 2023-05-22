var Bee = function() {
  Grub.call(this);
  this.color = 'yellow';
  this.age = 5;
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
Bee.prototype.job = 'keep on growing';
