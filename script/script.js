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

            $scope.message = "AngularJS tutorial";
                
            var employee = {
            firstName: "Mitin",
            lastName: "Sharma",
            gender: "Male"
            };
            $scope.employee = employee;

            var employees = [
                {fname:'mitin',lname:'sharma',gender:'male'},
                {fname:'nitin',lname:'bhardwaj',gender:'female'},
                {fname:'rahul',lname:'verma',gender:'female'},
                {fname:'akash',lname:'patel',gender:'male'},
                {fname:'saajan',lname:'kapoor',gender:'female'}
            ];
            $scope.employees = employees;

            var countries = [
                {name:'UK',cities:[{name:'london'},{name:'manchster'},{name:'birmingham'}]},
                {name:'USA',cities:[{name:'new york'},{name:'atlanta'},{name:'dallas'}]},
                {name:'INDIA',cities:[{name:'new delhi'},{name:'banglore'},{name:'chandigarh'}]}
            ];
             $scope.countries = countries;
                
            var technologies = [
                {name:'PHP',likes:'0',dislikes:'0'},
                {name:'C#',likes:'0',dislikes:'0'},
                {name:'JS',likes:'0',dislikes:'0'},
                {name:'Python',likes:'0',dislikes:'0'}
            ];

            $scope.technologies = technologies;


            $scope.incLikes = function(technology){
                technology.likes++;
            }

            $scope.incDislikes = function(technology){
                technology.dislikes++;
            }

        });

