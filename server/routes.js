var controllers = require('./controllers');
var router = require('express').Router();

/*Express Magic - Requests come in to router, router passes off to controller, which has access to all of the different routes*/
for (var route in controllers) {
  router.route("/" + route)
    .get(controllers[route].get)
    .post(controllers[route].post);
}

module.exports = router;

