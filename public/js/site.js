require('./vendor/angular.js');
require('./vendor/angular-route.js')(window, angular);
require('./controllers/MainCtrl.js')();
require('./controllers/PoemCtrl.js')();
require('./controllers/PoemShowCtrl.js')();
require('./controllers/ParserCtrl.js')();
require('./services/PoemService.js')();
require('./appRoutes.js')();
require('./app.js')();
