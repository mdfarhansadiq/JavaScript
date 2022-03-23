///******* In the name of Allah *******///

var obj = {
    num: 1,
    str: "One",
    bool: true,
    func: function(){
        return `${this.num}, ${this.str}, ${this.bool}`;
    } 
}


console.log(obj.func());
