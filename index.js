function getSumm(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    var c = a * b;
    alert(c.toFixed(2));
  } else if (typeof a === "string" || typeof b === "string") {
    c = a + b;
  } else {
    alert(
      "something is wrong, please try again"
    );
  }
  return c;
}
