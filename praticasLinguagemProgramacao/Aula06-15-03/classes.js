var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var forma = /** @class */ (function () {
    function forma(nome) {
        this.nome = nome;
    }
    forma.prototype.area = function () {
        return 0;
    };
    return forma;
}());
var circulo = /** @class */ (function (_super) {
    __extends(circulo, _super);
    function circulo(raio) {
        var _this = _super.call(this, "circulo") || this;
        _this.raio = raio;
        return _this;
    }
    circulo.prototype.area = function () {
        return 3.14 * this.raio * this.raio;
    };
    return circulo;
}(forma));
var quadrado = /** @class */ (function (_super) {
    __extends(quadrado, _super);
    function quadrado(lado) {
        var _this = _super.call(this, "quadrado") || this;
        _this.lado = lado;
        return _this;
    }
    quadrado.prototype.area = function () {
        return this.lado * this.lado;
    };
    return quadrado;
}(forma));
var shapes;
shapes = new Array();
shapes.push(new circulo(3));
shapes.push(new circulo(5));
shapes.push(new quadrado(4));
shapes.forEach(function (shapeItem) {
    console.log(shapeItem.nome + ": " + shapeItem.area());
});
