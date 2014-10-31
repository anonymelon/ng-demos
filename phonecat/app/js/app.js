var phonecatApp = angular.module('phonecatApp', ['ngRoute', 'phonecatController', 'phonecatFilter', 'phonecatServices']);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/phones', {
      templateUrl: 'partials/phoneList.html',
      controller: 'PhoneListCtrl'
    }).
    when('/phones/:phoneId', {
      templateUrl: 'partials/phoneDetail.html',
      controller: 'PhoneDetailCtrl'
    }).
    otherwise({
      redirectTo: '/phones'
    });
  }
]);
