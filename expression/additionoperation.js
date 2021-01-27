class AdditionOperation extends Operation {
    
    constructor(valueOne, valueTwo) {
        super(valueOne, valueTwo);
    }
    
    toString() {
        return this.valueOne.toString() + " + " + this.valueTwo.toString();
    }
    
}