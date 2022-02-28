var areaOfSquare = function (num) {
  return num * num;
};
var areaOfRectangle = function (width, length) {
  return width * length;
};
var areaOfCircle = function (radius) {
  return Math.PI * radius * radius;
};

module.exports = {
  square: areaOfSquare,
  rectangle: areaOfRectangle,
  circle: areaOfCircle,
};
