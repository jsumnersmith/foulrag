module.exports = function(){
  angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

      // home page
      .when('/', {
          templateUrl: '/views/home.html',
          controller: 'MainController'
      })

      .when('/poems', {
          templateUrl: '/views/poems.html',
          controller: 'PoemController'
      })

      .when('/poem/:id', {
        templateUrl: '/views/poem.html',
        controller: 'PoemShowController'
      })

      .when('/add', {
          templateUrl: '/views/parser.html',
          controller: 'ParserController'
      });


    $locationProvider.html5Mode({enabled: true, requireBase: false});

  }]);
}
