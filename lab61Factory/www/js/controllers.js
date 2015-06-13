angular.module('lab61.Controllers', ['lab61.Factories'] )

.controller('lab61.ListController', function($scope,  information) { //nombre del factory

        $scope.decorator = {

            'text-decoration': 'none'
        };

        $scope.data_information = information;  //informacin tambien es el return del factory
})

.controller('lab61.ViewController', function($scope, information) {

    $scope.data_information = information;
});