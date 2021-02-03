var MATHSFONT_REGULAR;
var MATHSFONT_LIGHT;
var MATHSFONT_BOLD;
var FONT_SIZE;

let WIDTH = 400;
let HEIGHT = 400;

var parser;

var mainExpressionInput = "";
var mainExpressionRPN = "";
var mainExpressionResult = "";
var mainExpressionObj;

let inputField;
let inputButton;

function setup() {
    
    createCanvas(WIDTH, HEIGHT);
    
    MATHSFONT_REGULAR = loadFont("font/Montserrat-Regular.otf");
    MATHSFONT_LIGHT = loadFont("font/Montserrat-Light.otf");
    MATHSFONT_BOLD = loadFont("font/Montserrat-Bold.otf");
    FONT_SIZE = 20;
    
    textSize(FONT_SIZE);
    textFont(MATHSFONT_REGULAR);
    
    inputField = createInput();
    inputField.position(20, HEIGHT + 10);
    
    inputButton = createButton('Calculate');
    inputButton.position(inputField.x + inputField.width + 20, HEIGHT + 10);
    inputButton.mousePressed(calculate);
    
    parser = new Parser();
    
    var rpn = parser.infixToRPN("5^2+1");
    console.log(rpn);
    console.log(parser.calculateRPN(rpn));
    
}

function calculate() {
    
    mainExpressionInput = inputField.value();
    mainExpressionRPN = parser.infixToRPN(mainExpressionInput);
    mainExpressionResult = parser.calculateRPN(mainExpressionRPN);
    
}

function draw() {
    
    background(17);
    
    fill(255);
    
    text(mainExpressionInput, 10, 50);
    text(mainExpressionRPN, 10, 80);
    text(mainExpressionResult, 10, 110);
    
    let div1 = new DivisionOperation(new ConstantTerm("5"), new ConstantTerm("2"));
    let div2 = new DivisionOperation(new VariableTerm("x"), new AdditionOperation(new VariableTerm("z"), new ConstantTerm("2")));
//    
//    var mainExpression;
//    
//    mainExpression = new MultiplicationOperation(new ConstantTerm("5"), new ConstantTerm("2"));
//    mainExpression = new AdditionOperation(new ConstantTerm("5"), new ConstantTerm("2"));
//    mainExpression = new MultiplicationOperation(div1, div2);
//    mainExpression = new AdditionOperation(div1, div2);
//    
//    mainExpression = new AdditionOperation(new MultiplicationOperation(new VariableTerm("x"), new ConstantTerm("2")),
//                                          new AdditionOperation(div1, div2));
    
//    mainExpression = new MultiplicationOperation(new VariableTerm("x"), new ConstantTerm("5"));
    
//    mainExpression = new IndexOperation(new VariableTerm("x"), new ConstantTerm("2"));
    mainExpression = new IndexOperation(new AdditionOperation(new VariableTerm("x"), new ConstantTerm("10")), new ConstantTerm("2"));
    
    let w = mainExpression.getDrawnWidth();
    let h = mainExpression.getDrawnHeight();
    
    mainExpression.draw((WIDTH / 2) - (w / 2), (HEIGHT / 2) - (h / 2));
    
}
















