function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype.isSquare = function () {
  if (this.a === this.b && this.a === this.c && this.a === this.d) {
    return true;
  }
  return false;
};
let p = new Square(2, 2, 2, 2);
console.log(p.isSquare());
