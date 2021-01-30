class MultiplicationOperation extends Operation {
    
    constructor(valueOne, valueTwo) {
        super(valueOne, valueTwo);
        this.gapWidth = 25;
    }
    
    draw(x, y) {
        
        var oneWidth = 0;
        var twoWidth = 0;
        var totalWidth = 0;
        
        this.valueOne.draw(x, y);
        x += this.getOneWidth();
        
        if (this.hasSign()) {

            let dotDiameter = 4;
            noStroke();
            circle(x + (this.gapWidth / 2), y - (FONT_SIZE / 3), dotDiameter);

            x += this.gapWidth;
            
        }
        
        this.valueTwo.draw(x, y);
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
        if (this.valueOne instanceof AdditionOperation) oneStr += "(";
        oneStr += this.valueOne.toString();
        if (this.valueOne instanceof AdditionOperation) oneStr += ")";
        return oneStr;
    }
    
    getOneWidth() {
        return this.valueOne.getDrawnWidth();
    }
    
    getTwoString() {
        var twoStr = "";
        if (this.valueTwo instanceof AdditionOperation) twoStr += "(";
        twoStr += this.valueTwo.toString();
        if (this.valueTwo instanceof AdditionOperation) twoStr += ")";
        return twoStr;
    }
    
    getTwoWidth() {
        return this.valueOne.getDrawnWidth();
    }
    
    hasSign() {
        return true;
//        if (this.valueOne instanceof ConstantTerm || this.valueTwo instanceof ConstantTerm ||
//           this.valueOne instanceof DivisionOperation || this.valueTwo instanceof DivisionOperation);
    }
    
}















