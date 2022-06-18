var TestController = require("../controller/TestController");
var indexRoute = require("../controller/index");

module.exports = function(app) {
    indexRoute.install(app);
    TestController.install(app);
}
