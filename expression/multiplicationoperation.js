class MultiplicationOperation extends Operation {
    
    constructor(valueOne, valueTwo) {
        super(valueOne, valueTwo);
        this.gapWidth = 25;
    }
    
    draw(x, y) {
        
        var oneWidth = 0;
        var twoWidth = 0;
        var totalWidth = 0;
        
        if (this.hasSign()) {

            text(this.getOneString(), x, y);
            oneWidth = this.getOneWidth();
            x += oneWidth;

            let dotDiameter = 4;
            noStroke();
            circle(x + (this.gapWidth / 2), y - (FONT_SIZE / 3), dotDiameter);

            x += this.gapWidth;

            text(this.getTwoString(), x, y);
            twoWidth = this.getTwoWidth();
            x += twoWidth;
            
        } else {
            
            text(this.toString(), x, y);
            
        }
        
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
        return textWidth(this.getOneString());
    }
    
    getTwoString() {
        var twoStr = "";
        if (this.valueTwo instanceof AdditionOperation) twoStr += "(";
        twoStr += this.valueTwo.toString();
        if (this.valueTwo instanceof AdditionOperation) twoStr += ")";
        return twoStr;
    }
    
    getTwoWidth() {
        return textWidth(this.getTwoString());
    }
    
    hasSign() {
        return this.valueOne instanceof ConstantTerm && this.valueTwo instanceof ConstantTerm;
    }
    
}