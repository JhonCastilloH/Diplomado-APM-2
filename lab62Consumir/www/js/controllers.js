angular.module('lab62.Controllers',
    [
        'ionic',
        'lab62.Services'
    ]
)

.controller('lab62.ListController', function($scope,  $state, users, products) {

        $scope.decorator = {

            'text-decoration': 'none'
        };

        $scope.data_information = users;

        $scope.getList = function() {

            $state.transitionTo('userList');

        };
    
        $scope.product_information = products;

        $scope.getListProducts = function() {

            $state.transitionTo('productsList');

        };
})

.controller('lab62.ViewController', function($scope, users, products) {

    console.log(users);

    $scope.data_information = users;

     $scope.products_information = products;
})



.controller('lab62.ListUserController', function($scope,lists) {

        $scope.lists = lists.user_list.query(function(data){

            console.log(data);
        });

})
.controller('lab62.ListProductController', function($scope,products) {

        $scope.products = products.products_list.query(function(data){

            console.log(data);
        });

});
