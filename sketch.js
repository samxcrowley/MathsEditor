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
    
    //mainExpressionObj.draw((WIDTH / 2) - (w / 2), (HEIGHT / 2) - (h / 2));
    
}
















