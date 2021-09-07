(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', Controller);

Controller.$inject = ['$scope'];
function Controller($scope) {

$scope.lunchlist = "";
$scope.message = "";
$scope.messagecolor = "black";


$scope.displayMessage = function () {
  var itemlist = $scope.lunchlist;
  var items =  itemlist.split(',');
  $scope.messagecolor = "green";

  checkEmpty(items);

  if(items.length == 0){
    $scope.message = "Please enter data first";
    $scope.messagecolor = "red";
    return;
  }

  if(items.length > 3){
    $scope.message = "Too much!";
  }
  else{
    $scope.message = "Enjoy!";
  }
};

function checkEmpty(list){
  for(var i=0; i<list.length; i++){
    if (list[i] === ""){
      list.splice(i,1);
      i--;
    }
  }
}

}
})();
