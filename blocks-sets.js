(function(){
angular.module("blocks")
.service("sets", function() {
    this["basic-with-solutions"] = {
        showSolutions: true,
        challenges: [
            intro,
            introWithColor,
            simpleFor,
            forStack,
            nestedFor,
            biLevel
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

function nestedFor(addBlock) {
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < i + 1; j++) {
            addBlock(i);
        }
    }
}

function biLevel(addBlock) {
    for (var i = 0; i < 6; i++) {
        var height = getHeight(i);
        for (var j = 0; j < height; j++) {
            addBlock(i);
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

})();
