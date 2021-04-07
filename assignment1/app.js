(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name = "";
  $scope.CheckLunch = function () {
  var arrMenu = menu.split(",")
  if arrMenu.length <= 3 {
   	return "Enjoy!";
  }
  else {
	return "Too much!";
  }
};

})();
