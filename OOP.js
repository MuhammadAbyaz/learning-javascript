// factory function
function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    return `rgb(${this.r},${this.g},${this.b})`;
  };
  color.hex = function () {
    return (
      "#" +
      ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b)
        .toString(16)
        .slice(1)
    );
  };
  return color;
}

// Constructor function
// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
//   console.log(this);
// }

// Color.prototype.rgb = function () {
//   return `rgb(${this.r}, ${this.g},${this.b})`;
// };
// Color.prototype.hex = function () {
//   return (
//     "#" +
//     ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1)
//   );
// };

// Color.prototype.rgba = function (a = 1) {
//   return `rgba(${this.r},${this.g},${this.b},${a})`;
// };

// Classes
class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  rgb() {
    return `rgb(${r},${g},${b})`;
  }
  hex() {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  rgba(a = 1) {
    return `rgba(${r},${g},${b},${a})`;
  }
  calcHSL() {}
}
