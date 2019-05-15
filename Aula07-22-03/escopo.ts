var global_num = 12             //escopo global 

class Numbers1 { 
    class_num = 13;             //escopo de classe
   
    storeNum():void { 
        var local_num = 14;     //escopo local
        if (true) {
            var block_num = 20; //escopo de bloco
            console.log("Block num: " + block_num);

            let fn = () => {
                let expression_num = 10;
                console.log("Exression num: " + expression_num);
            }

            fn();
        } 
    }    
} 

console.log("Global num: "+global_num)
var obj = new Numbers1(); 
console.log("Local num: " + obj.class_num)

obj.storeNum();