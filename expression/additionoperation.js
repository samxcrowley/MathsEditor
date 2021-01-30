class AdditionOperation extends Operation {
    
    constructor(valueOne, valueTwo) {
        
        super(valueOne, valueTwo, "+");
        
        this.gapWidth = 25;
        
    }
    
    draw(x, y) {
        
        let oneWidth = this.valueOne.draw(x, y);
        
        x += oneWidth;
        
        let signWidth = textWidth("+");
        text("+", x + (this.gapWidth / 2) - (signWidth / 2), y);
        
        x += this.gapWidth;
        
        let twoWidth = this.valueTwo.draw(x, y);
        
        return this.getDrawnWidth();
        
    }
    
    toString() {
        
        var str = "";
        
        if (this.valueOne instanceof AdditionOperation)
            str += "(";
        
        str += this.valueOne.toString();
        
        if (this.valueOne instanceof AdditionOperation)
            str += ")";
        
        str += " + ";
        
        if (this.valueTwo instanceof AdditionOperation)
            str += "(";
        
        str += this.valueTwo.toString();
        
        if (this.valueTwo instanceof AdditionOperation)
            str += ")";
        
        return str;

    }
    
    getDrawnWidth() {
        return this.getOneWidth() + this.gapWidth + this.getTwoWidth();
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
    
}