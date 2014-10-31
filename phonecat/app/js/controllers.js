var phonecatController = angular.module('phonecatController', []);

phonecatController.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
  }
]);

phonecatController.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({
      phoneId: $routeParams.phoneId
    }, function(phone) {
      $scope.phone = phone;
    });
  }
]);
