function* optimize(f) {
  console.clear();
  var x = 10;
  var y = f(x);
  for (k = 0; k < 1000; k++) {
    x_ = x + Math.random() * 2 - 1;
    y_ = f(x_);
    if (y_ < y) {
      x = x_;
      y = y_;
    }
    yield x;
  }
}

function f(x) {
  return (
    x ** 6 -
    3 * x ** 5 +
    x ** 4 +
    x ** 3 +
    2 * x ** 2 -
    2 * x +
    7 +
    2 * Math.cos(x ** 5)
  );
}

var iterator = optimize(f);

while (true) {
  var x = iterator.next().value;
  if (x === undefined) return;
  console.log(x);
}
