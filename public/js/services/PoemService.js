module.exports = function(){
  angular.module('PoemService', []).factory('Poem', ['$http', function($http) {

    return {
      // call to get all nerds
      get : function() {
        return $http.get('/api/poems');
      },


      // // these will work when more API routes are defined on the Node side of things
      // // call to POST and create a new poem
      // create : function(nerdData) {
      //   return $http.post('/api/poems', poemData);
      // },
      //
      // // call to DELETE a poem
      // delete : function(id) {
      //   return $http.delete('/api/poems/' + id);
      // }
    }

  }]);
}
