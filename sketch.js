var MATHSFONT_REGULAR;
var MATHSFONT_LIGHT;
var MATHSFONT_BOLD;
var FONT_SIZE;

let WIDTH = 400;
let HEIGHT = 400;

var mainExpression;

function setup() {
    
    createCanvas(WIDTH, HEIGHT);
    
    MATHSFONT_REGULAR = loadFont("font/Montserrat-Regular.otf");
    MATHSFONT_LIGHT = loadFont("font/Montserrat-Light.otf");
    MATHSFONT_BOLD = loadFont("font/Montserrat-Bold.otf");
    FONT_SIZE = 20;
    
    textSize(FONT_SIZE);
    textFont(MATHSFONT_REGULAR);
    
}

function draw() {
    
    background(17);
    
    fill(255);
    
//    let mult = new MultiplicationOperation(new VariableTerm("x"), new AdditionOperation(new ConstantTerm("5"), new ConstantTerm("10")));
    
//    let add = new AdditionOperation(mult, mult);
    
    //let add = new AdditionOperation(new ConstantTerm("5"), new ConstantTerm("10"));
    
    //add.draw(100, 100);
    
//    let simpleMult = new MultiplicationOperation(new ConstantTerm("5"), new VariableTerm("x"));
//    simpleMult.draw(100, 100, false);
    
}

function drawExpression(expression, textSize_) {
    
    fill(160, 180, 255);
    noStroke();
    
    textFont(MATHSFONT_REGULAR);
    textStyle(ITALIC);
    
    let stringWidth = textWidth(expression.toString());
    
    text(expression.toString(), (WIDTH / 2) - (stringWidth / 2), HEIGHT / 2);
    
}

function drawFraction(a, b, x, y, textSize_) {
    
    fill(255);
    stroke(255);
    
    textFont('Georgia');
    textStyle(ITALIC)
    textSize(textSize_);
    
    let aWidth = textWidth(a);
    let bWidth = textWidth(b);
    
    text(a, x - (aWidth / 2), y);
    text(b, x - (bWidth / 2), y + (textSize_ * 1.5));
    
    var lineWidth = 0;
    
    if (aWidth >= bWidth) lineWidth = aWidth;
    else lineWidth = bWidth;
    
    lineWidth += 20;
    
    line(x - (lineWidth / 2), y + (textSize_ / 2), x + (lineWidth / 2), y + (textSize_ / 2));
    
}