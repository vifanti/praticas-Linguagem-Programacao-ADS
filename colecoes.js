// list
var list1 = [1, 2, 3];
console.log(list1);
// tuple
var x;
x = ["hello", 10];
console.log(x);
// x = [10, hello];
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c1 = Color.Green;
var c0 = Color.Red;
var c2 = Color.Blue;

console.log(c0, c1, c2);