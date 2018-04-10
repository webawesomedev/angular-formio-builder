'use strict';

/**
 * @ngdoc overview
 * @name angularFormioBuilderApp
 * @description
 * # angularFormioBuilderApp
 *
 * Main module of the application.
 */
angular
  .module('angularFormioBuilderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'formio',
    'ngFormBuilder'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular
  .module('angularFormioBuilderApp')
  .config([
    'formioComponentsProvider',
    function (formioComponentsProvider) {
      
    }]);