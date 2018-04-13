'use strict';

angular
  .module('angularFormioBuilderApp')
  .service('apiService', ['$http', function($http) {
    this.fetch = function(url) {
      return $http.get(url)
        .then(
          function (response) {
            return response;
          },
          function (httpError) {
            return httpError;
          });
    };
  }]);
