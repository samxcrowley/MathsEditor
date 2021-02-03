class VariableTerm extends Term {
    
    constructor(textString) {
        super(textString);
    }
    
    toString() {
        return this.value;
    }
    
}