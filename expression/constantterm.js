class ConstantTerm extends Term {
    
    constructor(textString) {
        super(parseInt(textString));
    }
    
    toString() {
        return this.value;
    }
    
}