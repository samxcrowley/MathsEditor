/*

Operations have two values as parameters, and each type of operation performs
a certain mathematical operation between the two terms. For example, the
Addition Operation could take in the number 5 as its first value and the
variable x as its second. The operation would then represent the expression
'5 + x'.

*/

class Operation extends Expression {
    
    constructor(valueOne, valueTwo) {
        
        super();
        
        this.valueOne = valueOne;
        this.valueTwo = valueTwo;
        
    }
    
}