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


            var filter_emps = [
                {fname:'mitin',lname:'sharma',gender:'male',dob:new Date("January 12, 1993"),salary:15152.325},
                {fname:'nitin',lname:'bhardwaj',gender:'female',dob:new Date("January 12, 1994"),salary:35452.425},
                {fname:'rahul',lname:'verma',gender:'female',dob:new Date("January 12, 1993"),salary:17452.265},
                {fname:'akash',lname:'patel',gender:'male',dob:new Date("January 12, 1993"),salary:15152.225},
                {fname:'saajan',lname:'kapoor',gender:'female',dob:new Date("January 12, 1993"),salary:7552.125},
                {fname:'saajan',lname:'kapoor',gender:'female',dob:new Date("January 12, 1993"),salary:1452.125}
            ];

            $scope.filter_emps = filter_emps;

            $scope.rowLimit = 3;
            $scope.sortColumn = "fname";
            $scope.decOrder = false;
            $scope.fname_arrowDir = 'down';
            $scope.dob_arrowDir = 'down';
            $scope.salary_arrowDir = 'down';


            $scope.changeOrder = function($col){
                /*
                if($col==$scope.sortColumn)
                {
                    if($scope.decOrder==false)$scope.decOrder = true;
                    else $scope.decOrder=false;
                }
                else
                {
                    $scope.sortColumn=$col;
                    $scope.decOrder=false;
                }
                */
                /** Same written in smart code**/
                $scope.decOrder = ($col==$scope.sortColumn)? !$scope.decOrder : false;
                $scope.fname_arrowDir = ($scope.decOrder && $col == 'fname') ? 'up' : 'down';
                $scope.dob_arrowDir = ($scope.decOrder && $col == 'dob') ? 'up' : 'down';
                $scope.salary_arrowDir = ($scope.decOrder && $col == 'salary') ? 'up' : 'down';
                $scope.sortColumn=$col;
            }

            $scope.empsearch = "";

        });

