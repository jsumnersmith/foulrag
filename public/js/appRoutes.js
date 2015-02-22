module.exports = function(){
  angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

      // home page
      .when('/', {
          templateUrl: '/views/home.html',
          controller: 'MainController'
      })

      // nerds page that will use the NerdController
      .when('/poems', {
          templateUrl: '/views/poems.html',
          controller: 'PoemController'
      })

      // nerds page that will use the NerdController
      .when('/add', {
          templateUrl: '/views/parser.html',
          controller: 'ParserController'
      });


    $locationProvider.html5Mode({enabled: true, requireBase: false});

  }]);
}
