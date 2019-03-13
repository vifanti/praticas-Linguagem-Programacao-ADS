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
console.log(Color.Red, Color.Green, Color.Blue);
