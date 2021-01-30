class AdditionOperation extends Operation {
    
    constructor(valueOne, valueTwo) {
        
        super(valueOne, valueTwo, "+");
        
        this.gapWidth = 25;
        
    }
    
    draw(x, y) {
        
//        let oneWidth = this.valueOne.draw(x, y);
//        
//        x += oneWidth;
//        
//        let signWidth = textWidth("+");
//        text("+", x + (this.gapWidth / 2) - (signWidth / 2), y);
//        
//        x += this.gapWidth;
//        
//        let twoWidth = this.valueTwo.draw(x, y);
//        
//        let totalWidth = oneWidth + twoWidth + this.gapWidth;
        
        text(this.toString(), x, y);
        
        return textWidth(this.toString());
        
    }
    
    getDrawnWidth() {
        return this.drawnWidth;
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
    
}