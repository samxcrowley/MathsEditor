class IndexOperation extends Operation {
    
    // valueOne is base (any Expression)
    // valueTwo is index (Constant)
    constructor(valueOne, valueTwo) {
        
        super(valueOne, valueTwo, "^", false, 10);
        
        this.index_size = FONT_SIZE / 1.5;
        
    }
    
    draw(x, y) {
        
        if (this.valueOne instanceof Operation) {
            text("(", x, y);
            x += textWidth("(");
        }
        
        let oneWidth = this.valueOne.draw(x, y);
        x += oneWidth;
        
        if (this.valueOne instanceof Operation) {
            text(")", x, y);
            x += textWidth(")");
        }
        
        x += 1;
        
        textSize(this.index_size);
        this.valueTwo.draw(x, y - (FONT_SIZE / 2.5));
        
        textSize(FONT_SIZE);
        
        return this.getDrawnWidth();
        
    }
    
    toString() {
        
        var str = "";
        
        str += this.valueOne.toString();
        str += "^";
        str += this.valueTwo.toString();
        
        return str;

    }
    
    getDrawnWidth() {
        return this.valueOne.getDrawnWidth();
    }
    
}