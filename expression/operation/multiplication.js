class MultiplicationOperation extends Operation {
    
    constructor(valueOne, valueTwo) {
        
        // swap values if constant and variable are in wrong order
        if (valueTwo instanceof ConstantTerm && valueOne instanceof VariableTerm) {
            var temp = valueOne;
            valueOne = valueTwo;
            valueTwo = temp;
        }
        
        // swap values if constant and operation are in wrong order
        if (valueTwo instanceof ConstantTerm && valueOne instanceof Operation) {
            var temp = valueOne;
            valueOne = valueTwo;
            valueTwo = temp;
        }
        
        super(valueOne, valueTwo, "*", true, 5);
        
        this.gapWidth = 25;
        
    }
    
    draw(x, y) {
        
        var oneWidth = 0;
        var twoWidth = 0;
        var totalWidth = 0;
        
        this.valueOne.draw(x, y, this.isOneOperation());
        x += this.getOneWidth();
        
        if (this.hasSign()) {

            let dotDiameter = 4;
            noStroke();
            circle(x + (this.gapWidth / 2), y - (FONT_SIZE / 3), dotDiameter);

            x += this.gapWidth;
            
        }
        
        this.valueTwo.draw(x, y, this.isTwoOperation());
        twoWidth = this.getTwoWidth();
        
        return this.getDrawnWidth();
        
    }
    
    toString() {
        
        var str = "";
        
        if (this.valueOne instanceof AdditionOperation)
            str += "(";
        
        str += this.valueOne.toString();
        
        if (this.valueOne instanceof AdditionOperation)
            str += ")";
        
        if (this.valueTwo instanceof AdditionOperation)
            str += "(";
        
        str += this.valueTwo.toString();
        
        if (this.valueTwo instanceof AdditionOperation)
            str += ")";
        
        return str;

    }
    
    getDrawnWidth() {
        if (this.hasSign()) {
            return this.getOneWidth() + this.getTwoWidth() + this.gapWidth;
        } else {
            return textSize(this.toString());
        }
    }
    
    getOneString() {
        
        var oneStr = "";
        if (this.isOneOperation()) oneStr += "(";
        oneStr += this.valueOne.toString();
        if (this.isOneOperation()) oneStr += ")";
        
        return oneStr;
        
    }
    
    getOneWidth() {
        return this.valueOne.getDrawnWidth();
    }
    
    isOneOperation() {
        return this.valueOne instanceof AdditionOperation || this.valueOne instanceof SubtractionOperation
                        || this.valueOne instanceof MultiplicationOperation || this.valueOne instanceof DivisionOperation;
    }
    
    getTwoString() {
        
        var isOperation = this.valueTwo instanceof AdditionOperation || this.valueTwo instanceof SubtractionOperation
                        || this.valueTwo instanceof MultiplicationOperation || this.valueTwo instanceof DivisionOperation;
        
        var twoStr = "";
        if (this.isTwoOperation()) twoStr += "(";
        twoStr += this.valueTwo.toString();
        if (this.isTwoOperation()) twoStr += ")";
        
        return twoStr;
        
    }
    
    getTwoWidth() {
        return this.valueOne.getDrawnWidth();
    }
    
    isTwoOperation() {
        return this.valueTwo instanceof AdditionOperation || this.valueTwo instanceof SubtractionOperation
                        || this.valueTwo instanceof MultiplicationOperation || this.valueTwo instanceof DivisionOperation;
    }
    
    hasSign() {
        
        if (this.valueOne instanceof ConstantTerm && this.valueTwo instanceof ConstantTerm) return true;
        if (this.valueOne instanceof DivisionOperation) return true;
        if (this.valueTwo instanceof DivisionOperation) return true;
        
        return false;
        
    }
    
}















