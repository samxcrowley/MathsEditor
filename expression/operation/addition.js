class AdditionOperation extends Operation {
    
    constructor(valueOne, valueTwo) {
        
        super(valueOne, valueTwo, "+", true, 0);
        
        this.gapWidth = 25;
        
    }
    
    draw(x, y, brackets) {
        
        if (brackets) {
            text("(", x, y);
            x += textWidth("(");
        }
        
        let oneWidth = this.valueOne.draw(x, y);
        
        x += oneWidth;
        
        let symbolWidth = textWidth(this.symbol);
        text(this.symbol, x + (this.gapWidth / 2) - (symbolWidth / 2), y);
        
        x += this.gapWidth;
        
        let twoWidth = this.valueTwo.draw(x, y);
        
        x += twoWidth;
        
        if (brackets) {
            text(")", x, y);
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
        
        str += " " + this.symbol + " ";
        
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