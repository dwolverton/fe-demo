(function(){
var DEFAULT_COLOR = "gray";

angular.module("blocks", ["ngRoute"])
.config(function($routeProvider) {
    $routeProvider.when("/:set", {
        redirectTo: "/:set/0"
    }).when("/:set/:challengeNum", {
        template:
        '<header>\
            <button class="prev-button" ng-click="vm.prev()" ng-disabled="!vm.hasPrev()">Previous</button>\
            <div class="challengeNumbers">\
                <button ng-repeat="challenge in vm.challenges" ng-class="{current: $index === vm.challengeNum - 1}" ng-click="vm.goTo($index)">{{$index + 1}}</button>\
            </div>\
            <button class="prev-button" ng-click="vm.next()" ng-disabled="!vm.hasNext()">Next</button>\
        </header>\
        <challenge challenge="vm.challenge" allow-see-solution="true"></challenge>',
        controller: "challengeController",
        controllerAs: "vm"
    });
})
.controller("challengeController", function(sets, $routeParams, $location) {
    var vm = this;
    var set = sets[$routeParams.set];
    var challengeNum = parseInt($routeParams.challengeNum) || 0;

    vm.challenges = set.challenges;
    vm.challenge = set.challenges[challengeNum];
    vm.challengeNum = challengeNum + 1;
    vm.challengeCount = set.challenges.length;
    vm.hasPrev = function() {
        return challengeNum > 0;
    }
    vm.hasNext = function() {
        return challengeNum < set.challenges.length - 1;
    }
    vm.prev = function() {
        goTo(challengeNum - 1);
    }
    vm.next = function() {
        goTo(challengeNum + 1);
    }

    vm.goTo = function goTo(num) {
        $location.path("/" + $routeParams.set + "/" + num);
    }
})
.component("challenge", {
    bindings: { challenge: "<", allowSeeSolution: "<" },
    controllerAs: "vm",
    template:
    '<div class="challenge">\
        <div class="code-area">\
            <pre class="code"><code>{{vm.challengeToCode(vm.challenge)}}</code></pre>\
            <button ng-if="vm.allowSeeSolution && !vm.isShowSolution" ng-click="vm.showSolution()" type="button">Show Solution</button>\
        </div>\
        <solution ng-if="vm.isShowSolution" challenge="vm.challenge" delay="150"></solution>\
    </div>',
    controller: function(challengeToCode) {
        var vm = this;
        vm.challengeToCode = challengeToCode;
        vm.isShowSolution = false;
        vm.showSolution = function() {
            vm.isShowSolution = true;
        }
    }
})
.component("block", {
    bindings: { color: "@" },
    controllerAs: "vm",
    template: '<div class="block" style="background-color: {{vm.color}}"></div>'
})
.component("solution", {
    bindings: { "challenge": "<", "delay": "<" },
    template:
    '<div class="solution">\
        <div class="stack" ng-repeat="stack in $ctrl.stacks track by $index">\
            <block color="{{block}}" ng-repeat="block in stack track by $index"></block>\
        </div>\
    </div>',
    controller: function($scope, challengeToSteps, $timeout) {
        var vm = this;
        var pendingTimeouts = [];

        $scope.$watch("vm.challenge", function() {
            buildSolution();
        });
        $scope.$watch("vm.delay", function() {
            buildSolution();
        });

        function buildSolution() {
            // empty stacks and clear timeouts
            pendingTimeouts.forEach(function(timeout) { $timeout.cancel(timeout) });
            pendingTimeouts = [];
            vm.stacks = [[],[],[],[],[],[]];

            // build stacks
            var steps = challengeToSteps(vm.challenge);
            var delay = vm.delay || 0;
            steps.forEach(function(step, i) {
                pendingTimeouts.push($timeout(function() {
                    console.log(vm.stacks, step);
                    vm.stacks[step.stack].push(step.color);
                }, delay * i));
            });
        }
    }
})
.factory("challengeToSteps", function() {
    return function(fn) {
        if (!fn) {
            return [];
        }
        var steps = [];
        function addBlock(stack, color) {
            steps.push({
                stack: stack,
                color: color || "gray"
            });
        }
        fn(addBlock);
        return steps;
    };
})
.factory("challengeToCode", function() {
    return function(fn) {
        return fn.toString()
                .replace(/(^.*?\{\s*)|(\s*\}.*?$)/g, "") // only keep function body
                .replace(/\n(\t| {4})/g, "\n"); // remove first indent
    }
})


})();
