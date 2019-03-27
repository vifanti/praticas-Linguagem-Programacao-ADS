var global_num = 12; //escopo global 
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.class_num = 13; //escopo de classe
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; //escopo local
        if (true) {
            var block_num = 20; //escopo de bloco
            console.log("Block num: " + block_num);
            var fn = function () {
                var expression_num = 10;
                console.log("Exression num: " + expression_num);
            };
            fn();
        }
    };
    return Numbers;
}());
console.log("Global num: " + global_num);
var obj = new Numbers();
console.log("Local num: " + obj.class_num);
obj.storeNum();
