///<reference path="angular.min.js" />

/*


var myApp = angular.module("myModule",[]);



var myController = function($scope){
    
    var employee = {
        firstName: "Mitin",
        lastName: "Sharma",
        gender: "Male"
    };
    
    $scope.employee = employee;
    
    $scope.message = "AngularJS tutorial";
}

myApp.controller("myController",myController);

*/



var myApp = angular
            .module("myModule",[])
            .controller("myController", function($scope){
                
                var employee = {
        firstName: "Mitin",
        lastName: "Sharma",
        gender: "Male"
    };
    
    $scope.employee = employee;
    
    $scope.message = "AngularJS tutorial";
                
            });
