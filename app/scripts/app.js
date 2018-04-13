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
    'ui.bootstrap',
    'ui.select',
    'formio',
    'ngFormBuilder',
    'ngJsonExplorer'
  ])
  .config(function ($routeProvider, $httpProvider) {
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
    $httpProvider.useApplyAsync(true);
  });

angular
  .module('angularFormioBuilderApp')
  .config([
    'formioComponentsProvider',
    function (formioComponentsProvider) {
      console.log(formioComponentsProvider);
    }]);