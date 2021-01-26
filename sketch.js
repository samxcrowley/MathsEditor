function setup() {
    
    createCanvas(400, 400);
    
}

function draw() {
    
    background(51);
    
//    drawFraction("ax^2 + bx + c", "ax^2 + bx + c + sqrt(5)", 200, 100, 16);
    
}

//function drawFraction(a, b, x, y, textSize_) {
//    
//    fill(255);
//    stroke(255);
//    
//    textFont('Georgia');
//    textStyle(ITALIC)
//    textSize(textSize_);
//    
//    let aWidth = textWidth(a);
//    let bWidth = textWidth(b);
//    
//    text(a, x - (aWidth / 2), y);
//    text(b, x - (bWidth / 2), y + (textSize_ * 1.5));
//    
//    var lineWidth = 0;
//    
//    if (aWidth >= bWidth) lineWidth = aWidth;
//    else lineWidth = bWidth;
//    
//    lineWidth += 20;
//    
//    line(x - (lineWidth / 2), y + (textSize_ / 2), x + (lineWidth / 2), y + (textSize_ / 2));
//    
//}