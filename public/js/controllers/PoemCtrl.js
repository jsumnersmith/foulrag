module.exports = function(){
  angular.module('PoemCtrl', []).controller('PoemController', function($scope, $http) {
    $scope.tagline = 'Nothing beats a poem!';

    $http.get('api/poems/').success(function(data) {
      $scope.poems = data;
    });

  });
}
