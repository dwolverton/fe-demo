(function(){
angular.module("blocks")
.service("sets", function() {
    this["intro"] = {
        showSolutions: true,
        challenges: [
            intro,
            introWithColor,
            math,
            mathDivide,
            tempMid,
            tempLow,
            tempHigh
        ]
    }
    this["loops"] = {
        showSolutions: true,
        challenges: [
            simpleFor,
            forStack,
            whileCount,
            twoLoops,
            whileCountDown,
            twoLoops2,
            forSkip,
            whileDouble,
            nestedFor,
            triangle,
            sawTooth,
            fib
        ]
    }
    this["functions"] = {
        showSolutions: true,
        challenges: [
            fib,
            biLevel,
            biLevelFunction
        ]
    }
    this["misc"] = {
        showSolutions: true,
        challenges: [
            splitColor,
            alternateColor,
            biLevel,
            mixColor,
            rainbow,
            rainbowNoBreak
        ]
    }
});

function intro(addBlock) {
    addBlock(0);
    addBlock(0);
    addBlock(5);
}

function introWithColor(addBlock) {
    addBlock(2, "red");
    addBlock(3, "blue");
}

function math(addBlock) {
    var stack = 0;
    addBlock(stack);
    stack += 2;
    addBlock(stack);
    stack += stack;
    addBlock(stack);
    stack = 5 - 2;
    addBlock(stack);
}

function mathDivide(addBlock) {
    var stack = 4;
    addBlock(stack);
    stack /= 2;
    addBlock(stack);
    stack /= 2;
    addBlock(stack);
}

function tempMid(addBlock) {
    var temp = 75;

    if (temp >= 80) {
        addBlock(4);
    } else if (temp > 70){
        addBlock(2);
    } else {
        addBlock(0);
    }
}

function tempLow(addBlock) {
    var temp = 60;

    if (temp >= 80) {
        addBlock(4);
    } else if (temp > 70){
        addBlock(2);
    } else {
        addBlock(0);
    }
}

function tempHigh(addBlock) {
    var temp = 90;

    if (temp >= 80) {
        addBlock(4);
    } else if (temp > 70){
        addBlock(2);
    } else {
        addBlock(0);
    }
}

function simpleFor(addBlock) {
    for (var i = 0; i < 6; i++) {
        addBlock(i);
    }
}

function forStack(addBlock) {
    for (var i = 0; i < 4; i++) {
        addBlock(2);
    }
}

function twoLoops(addBlock) {
    for (var i = 0; i < 3; i++) {
        addBlock(i, "red");
    }
    for (var i = 2; i < 5; i++) {
        addBlock(i, "blue");
    }
}

function twoLoops2(addBlock) {
    for (var i = 1; i <= 4; i++) {
        addBlock(i, "red");
    }
    for (var i = 2; i < 4; i++) {
        addBlock(i, "blue");
    }
}

function forSkip(addBlock) {
    for (var i = 1; i < 6; i += 2) {
        addBlock(i);
    }
}

function whileCountDown(addBlock) {
    var number = 4;
    while(number > 0) {
        addBlock(0);
        number--;
    }
}

function whileDouble(addBlock) {
    var number = 1;
    while(number < 20) {
        addBlock(0);
        number *= 2;
    }
}

function whileCount(addBlock) {
    var blocksPlaced = 0;
    while(blocksPlaced <= 3) {
        addBlock(3);
        blocksPlaced++;
    }
}

function triangle(addBlock) {
    for (var i = 0; i < 6; i++) {
        var height = i + 1;
        buildToHeight(i, height);
    }

    function buildToHeight(stack, height) {
        for (var i = 0; i < height; i++) {
            addBlock(stack);
        }
    }
}
function sawTooth(addBlock) {
    for (var i = 0; i < 6; i++) {
        buildToHeight(i, i % 3 + 1);
    }

    function buildToHeight(stack, height) {
        for (var i = 0; i < height; i++) {
            addBlock(stack);
        }
    }
}

function fib(addBlock) {
    var prevCount = 0;
    var count = 1;
    for (var i = 0; i < 6; i++) {
        buildToHeight(i, count);
        var next = count + prevCount;
        prevCount = count;
        count = next;
    }

    function buildToHeight(stack, height) {
        for (var i = 0; i < height; i++) {
            addBlock(stack);
        }
    }
}

function nestedFor(addBlock) {
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < i + 1; j++) {
            addBlock(i);
        }
    }
}

function biLevel(addBlock) {
    for (var i = 0; i < 6; i++) {
        if (i < 3) {
            buildToHeight(i, 1);
        } else {
            buildToHeight(i, 2);
        }
    }

    function buildToHeight(stack, height) {
        for (var i = 0; i < height; i++) {
            addBlock(stack);
        }
    }
}

function rainbow(addBlock) {
    for (var i = 0; i < 6; i++) {
        switch(i) {
            case 0: addBlock(i, "red"); break;
            case 1: addBlock(i, "orange"); break;
            case 2: addBlock(i, "yellow"); break;
            case 3: addBlock(i, "green"); break;
            case 4: addBlock(i, "blue"); break;
            case 5: addBlock(i, "purple"); break;
        }
    }
}

function rainbowNoBreak(addBlock) {
    for (var i = 0; i < 6; i++) {
        switch(i) {
            case 0: addBlock(i, "red");
            case 1: addBlock(i, "orange");
            case 2: addBlock(i, "yellow");
            case 3: addBlock(i, "green");
            case 4: addBlock(i, "blue");
            case 5: addBlock(i, "purple");
        }
    }
}

function biLevelFunction(addBlock) {
    for (var i = 0; i < 6; i++) {
        var height = getHeight(i);
        buildToHeight(i, height);
    }

    function buildToHeight(stack, height) {
        for (var i = 0; i < height; i++) {
            addBlock(stack);
        }
    }

    function getHeight(stackNum) {
        if (stackNum < 3) {
            return 1;
        } else {
            return 2;
        }
    }
}

function splitColor(addBlock) {
    for (var i = 0; i < 6; i++) {
        if (i <= 2) {
            addBlock(i, "red");
        } else {
            addBlock(i, "yellow");
        }
    }
}

function alternateColor(addBlock) {
    for (var i = 0; i < 6; i++) {
        if (i % 2 === 0) {
            addBlock(i, "red");
        } else {
            addBlock(i, "blue");
        }
    }
}

function mixColor(addBlock) {
    for (var i = 0; i < 6; i++) {
        if (i <= 2) {
            addBlock(i, "yellow");
        } else {
            addBlock(i, "black");
        }

        if (i % 3 === 0) {
            addBlock(i, "red");
        } else {
            addBlock(i, "blue");
        }

        if (i % 2 == 0) {
            addBlock(i);
        }
    }
}

})();
