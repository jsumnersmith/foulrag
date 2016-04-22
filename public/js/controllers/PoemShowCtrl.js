module.exports = function(){
  angular.module('PoemShowCtrl', []).controller('PoemShowController', function($scope, $http, $routeParams) {
    $http.get('/api/poem/'+$routeParams.id).success(function(data) {
      console.log("I was successful", data);
      $scope.poem = data;
      //$scope.lines = data.lines;
    });
  });
}
