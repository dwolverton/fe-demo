/* Tools:
  drawRectangle(topX, topY, width, height)
  drawLine(startX, startY, endX, endY)
  drawCircle(centerX, centerY, radius)
*/

function forNoobs() {
    drawCircle(0, -20, 20);
    drawRectangle(-5, 0, 10, 30);

    drawRectangle(-110, 0, 60, 40);
    drawLine(-118, 4, -80, -25);
    drawLine(-42, 4, -80, -25);
    drawRectangle(-78, 15, 15, 25);

    drawCircle(30, -15, 20);
    drawRectangle(25, 5, 10, 30);

    drawCircle(-25, -17, 20);
    drawRectangle(-30, 3, 10, 30);
}

// Versus...

function forDevelopers() {
    drawTree(0, 0);
    drawHouse(-80, 0);
    drawTree(30, 5);
    drawTree(-25, 3);
}


function drawTree(x, y) {
    drawCircle(x, y - 20, 20);
    drawRectangle(x - 5, y, 10, 30);
}
function drawHouse(x,y) {
    drawRectangle(x - 30, y, 60, 40);
    drawLine(x - 38, y + 4, x, y - 25);
    drawLine(x + 38, y + 4, x, y - 25);
    drawRectangle(x + 2, y + 15, 15, 25);
}
