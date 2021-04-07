(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', function ($scope){
  $scope.menu = "";
  $scope.txtMsg = "";
  $scope.CheckMenu = function () {
  var txtMessage = CheckItems($scope.menu);
  $scope.txtMsg = txtMessage;
  };

function CheckItems(string){
  var arrlength = string.split(",");
  var txtMessage ="";
  if(arrlength.length < 4) {
    txtMessage = "Enjoy!";
  }
  else {
	txtMessage = "Too much!";
  }
  return txtMessage;
}
});

})();
