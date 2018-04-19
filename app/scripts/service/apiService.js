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
    this.post = function(url, data) {
      return $http({
        url: url,
        method: 'POST',
        data: data,
      })
        .then(
          function (response) {
            return response;
          },
          function (httpError) {
            return httpError;
          });
    };
  }]);
