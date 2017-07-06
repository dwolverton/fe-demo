/* Tools:
  drawRectangle(topX, topY, width, height)
  drawLine(startX, startY, endX, endY)
  drawCircle(centerX, centerY, radius)
*/

function forNoobs() {
    drawCircle(0, -2, 2);
    drawRectangle(-.5, 0, 1, 3);

    drawRectangle(-11, 0, 6, 4);
    drawLine(-11.7, .5, -8, -2.5);
    drawLine(-4.3, .5, -8, -2.5);
    drawRectangle(-7.8, 1.5, 1.5, 2.5);

    drawCircle(3, -1.5, 2);
    drawRectangle(2.5, .5, 1, 3);

    drawCircle(-2.5, -1.7, 2);
    drawRectangle(-3, .3, 1, 3);
}

// Versus...

function forDevelopers() {
    drawTree(0, 0);
    drawHouse(-8, 0);
    drawTree(3, .5);
    drawTree(-2.5, .3);
}


function drawTree(x, y) {
    drawCircle(x, y - 2, 2);
    drawRectangle(x - .5, y, 1, 3);
}
function drawHouse(x,y) {
    drawRectangle(x - 3, y, 6, 4);
    drawLine(x - 3.7, y + .5, x, y - 2.5);
    drawLine(x + 3.7, y + .5, x, y - 2.5);
    drawRectangle(x + .2, y + 1.5, 1.5, 2.5);
}
