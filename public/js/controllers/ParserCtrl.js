module.exports = function(){
  angular.module('ParserCtrl', []).controller('ParserController', function($scope) {
    $scope.poemForm = {};
    $scope.postPoem = function(){
      $http({
        method  : 'POST',
        url     : '/api/poem',
        data    : JSON.stringify($scope.poemForm)  // pass in data as strings
        //headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
    }
  });
}
