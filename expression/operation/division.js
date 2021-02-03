class DivisionOperation extends Operation {
    
    // valueOne is numerator
    // valueTwo is denominator
    constructor(valueOne, valueTwo) {
        
        super(valueOne, valueTwo, "/", true, 5);
        
        this.lineOff = 10;
        
    }
    
    draw(x, y, hasSign) {
        
        let oneWidth = this.valueOne.getDrawnWidth();
        let twoWidth = this.valueTwo.getDrawnWidth();
        
        let greaterWidth = oneWidth;
        if (twoWidth >= oneWidth) greaterWidth = twoWidth;
        
        let lineWidth = this.getDrawnWidth();
        
        stroke(255);
        line(x, y, x + this.getDrawnWidth(), y);
        noStroke();
        
        let centerX = x + (greaterWidth / 2);
        
        this.valueOne.draw(this.lineOff + centerX - (oneWidth / 2), y - 10);
        this.valueTwo.draw(this.lineOff + centerX - (twoWidth / 2), y + 23);
        
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
        
        str += " / ";
        
        str += this.valueTwo.toString();
        
        if (this.valueTwo instanceof AdditionOperation)
            str += ")";
        
        return str;

    }
    
    getDrawnWidth() {
        
        let oneWidth = this.valueOne.getDrawnWidth();
        let twoWidth = this.valueTwo.getDrawnWidth();
        
        let greaterWidth = oneWidth;
        if (twoWidth >= oneWidth) greaterWidth = twoWidth;
        
        return greaterWidth + (this.lineOff * 2);
        
    }
    
    getDrawnHeight() {
        return FONT_SIZE * 3;
    }
    
}