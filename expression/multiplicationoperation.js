class MultiplicationOperation extends Operation {
    
    constructor(valueOne, valueTwo) {
        super(valueOne, valueTwo);
    }
    
    toString() {
        
        var str = "";
        
        if (this.valueOne instanceof AdditionOperation || this.valueOne instanceof SubtractionOperation)
            str += "(";
        
        str += this.valueOne.toString();
        
        if (this.valueOne instanceof AdditionOperation || this.valueOne instanceof SubtractionOperation)
            str += ")";
        
        str += " · ";
        
        if (this.valueTwo instanceof AdditionOperation || this.valueOne instanceof SubtractionOperation)
            str += "(";
        
        str += this.valueTwo.toString();
        
        if (this.valueTwo instanceof AdditionOperation || this.valueOne instanceof SubtractionOperation)
            str += ")";
        
        return str;

    }
    
}