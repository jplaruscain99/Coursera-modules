(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', Controller);

Controller.$inject = ['$scope'];
function Controller($scope) {

$scope.lunchlist = "";
$scope.message = "";

$scope.displayMessage = function () {
  if($scope.lunchlist === ""){
    $scope.message = "Please enter data first";
    return;
  }

  var itemlist = $scope.lunchlist;
  var items =  itemlist.split(',');

  if(items.length > 3)
    $scope.message = "Too much!";
  else
    $scope.message = "Enjoy!";
};

}
})();
