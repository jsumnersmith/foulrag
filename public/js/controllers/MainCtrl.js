var $ = require('jquery');
module.exports = function(){
  angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {
    $scope.tagline = 'To the moon and back!';

    $scope.poemForm = {};

    $scope.postPoem = function(){
      $http({
        method  : 'POST',
        url     : '/api/poem',
        data    : JSON.stringify($scope.poemForm)  // pass in data as strings
        //headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
    }
    // $scope.poemForm.author = "Ezra Pound";
    // $scope.poemForm.title  = "In a Metro Station";
    // $scope.poemForm.text  = "Probably a poem";

  });
}
