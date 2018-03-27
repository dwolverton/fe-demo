angular.module("requestResponse", [])
.component("request", {
    template: `<section class="request">
        <h3><label>URL</label> {{$ctrl.url}}</h3>
        <div class="url-section">
            <p><label>Protocol</label> <select ng-model="$ctrl.protocol" ng-change="$ctrl.rebuildUrl()">
                <option value="http">HTTP</option>
                <option value="https">HTTPS</option>
            </select></p>
            <p><label>Host (Domain Name or IP)</label> <input ng-model="$ctrl.host" ng-change="$ctrl.rebuildUrl()"/></p>
            <p><label>Port</label> <input type="number" ng-model="$ctrl.port" ng-change="$ctrl.rebuildUrl()"/></p>
            <p><label>Path</label> <input ng-model="$ctrl.path" ng-change="$ctrl.rebuildUrl()"/></p>
            <h4>Parameters</h4>
            <p ng-repeat="param in $ctrl.parameters" class="name-value">
                <label>Name</label> <input ng-model="param.name" ng-change="$ctrl.rebuildUrl()"/>
                <label>Value</label> <input ng-model="param.value" ng-change="$ctrl.rebuildUrl()"/>
            </p>
            <p><button ng-click="$ctrl.addParam()">Add Another Parameter</button></p>
        </div>

        <h3>Method</h3>
        <p><select ng-model="$ctrl.method">
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>DELETE</option>
        </select></p>

        <h3>Body</h3>
        <p><textarea ng-mdoel="$ctrl.body" ng-disabled="$ctrl.isBodyDisabled()"></textarea></p>

        <headers defaults="[{name: 'Accepts', value: 'application/json'}]"></headers>
    </section>`,
    controller: function($httpParamSerializer) {
        var ctrl = this;
        ctrl.protocol = "http";
        ctrl.host = "server-address";
        ctrl.port = null;
        ctrl.path = "/";
        ctrl.parameters = [
            { name: "", value: ""}
        ];
        ctrl.method = "GET";
        ctrl.body = "";

        ctrl.rebuildUrl = function() {
            var port = (typeof ctrl.port === "number" && ctrl.port >= 0) ? ":" + ctrl.port : "";
            ctrl.url = ctrl.protocol + "://" + ctrl.host + port + ctrl.path;
            var params = {};
            ctrl.parameters.filter(p => p.name).forEach(p => {
                params[p.name] = p.value;
            });
            params = $httpParamSerializer(params);
            if (params) {
                ctrl.url += "?" + params;
            }
        };
        ctrl.addParam = function() {
            ctrl.parameters.push({ name: "", value: "" });
        };
        ctrl.isBodyDisabled = function() {
            return ctrl.method === "GET" || ctrl.method === "DELETE";
        }

        ctrl.rebuildUrl();
    }
})
.component("response", {
    template: `<section class="response">
        <p><label>Status</label> <select ng-model="$ctrl.status">
            <option value="200">200 - OK</option>
            <option value="201">201 - Created</option>
            <option value="302">302 - Redirect</option>
            <option value="400">400 - Bad Request</option>
            <option value="401">401 - Unauthorized</option>
            <option value="403">403 - Forbidden</option>
            <option value="404">404 - Not Found</option>
            <option value="500">500 - Server Error</option>
        </select></p>

        <h3>Body</h3>
        <p><textarea ng-mdoel="$ctrl.body"></textarea></p>

        <headers defaults="[{name: 'Content-Type', value: 'application/json'}]"></headers>
    </section>`,
    controller: function($httpParamSerializer) {
        var ctrl = this;
        ctrl.status = "200";
        ctrl.body = "";
    }
})
.component("headers", {
    bindings: {
        defaults: "<"
    },
    template: `
        <h3>Headers</h3>
        <p ng-repeat="header in $ctrl.headers" class="name-value">
            <label>Name</label> <input ng-model="header.name"/>
            <label>Value</label> <input ng-model="header.value"/>
        </p>
        <p><button ng-click="$ctrl.addHeader()">Add Another Header</button></p>
    `,
    controller: function($httpParamSerializer) {
        var ctrl = this;

        ctrl.$onInit = function() {
            ctrl.headers = (ctrl.defaults || []).concat([
                { name: "", value: ""}
            ]);
        };
        ctrl.addHeader = function() {
            ctrl.headers.push({ name: "", value: "" });
        };
    }
})