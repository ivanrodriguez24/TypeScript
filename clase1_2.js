function calc_distancia(x1, y1, x2, y2) {
    if (x2 === void 0) { x2 = 0; }
    if (y2 === void 0) { y2 = 0; }
    var a = Math.pow(y2 - y1, 2);
    var b = Math.pow(x2 - x1, 2);
    return Math.sqrt(a + b);
}
var d = calc_distancia(15, 5);
console.log("la distancia es ", d);
var e = calc_distancia(15, 5, 20, 2);
console.log("la distancia es ", e);
var f = calc_distancia(20, 2);
console.log("la distancia es ", f);
var t = calc_distancia(10, 10, 0, 0);
console.log("la distancia es ", t);
var z = calc_distancia(-10, -10, 0, 0);
console.log("la distancia es ", z);
