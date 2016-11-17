

var myApp = angular.module("myModule",[])
    .controller("myController",function($scope,$http,$log,stringService){

        $scope.title="Fetching data from PHP";


        $scope.displayData = function(){

            $http.get("PHP/index.php").success(function(data){

                $scope.employees = data;
                $log.info(data);
            })
        }

         $scope.title2 = "Custom Service";

        $scope.trasformString = function(input){

            $scope.output = stringService.processStrings(input);
        }
});

