class MultiplicationOperation extends Operation {
    
    constructor(valueOne, valueTwo) {
        super(valueOne, valueTwo);
        this.gapWidth = 25;
    }
    
    draw(x, y, hasSign) {
        
        var oneWidth = 0;
        var twoWidth = 0;
        var totalWidth = 0;
        
        if (hasSign) {
            
            var oneStr = "";
            if (this.valueOne instanceof AdditionOperation) oneStr += "(";
            oneStr += this.valueOne.toString();
            if (this.valueOne instanceof AdditionOperation) oneStr += ")";

            var twoStr = "";
            if (this.valueTwo instanceof AdditionOperation) twoStr += "(";
            twoStr += this.valueTwo.toString();
            if (this.valueTwo instanceof AdditionOperation) twoStr += ")";

            text(oneStr, x, y);
            oneWidth = textWidth(oneStr);
            x += oneWidth;

            let dotDiameter = 4;
            noStroke();
            circle(x + (this.gapWidth / 2), y - (FONT_SIZE / 3), dotDiameter);

            x += this.gapWidth;

            text(twoStr, x, y);
            twoWidth = textWidth(twoStr);
            x += twoWidth;

            totalWidth = oneWidth + twoWidth + this.gapWidth;
            
        } else {
            
            text(this.toString(), x, y);
            totalWidth = textSize(this.toString());
            
        }
        
        return totalWidth;
        
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
    
}