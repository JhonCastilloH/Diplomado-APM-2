angular.module('lab62.Services', [
    'ngResource'
])

.service('users', function() {

    this.data = {};

    this.data.first_name = '';

    this.data.last_name = '';

    this.data.email = '';

})

.service('products', function() {

    this.data = {};

    this.data.name = '';

    this.data.type = '';

    this.data.price = '';

})

.service('lists', function($resource){

        this.user_list = $resource('http://127.0.0.1:7070/api/v1/user/list');
})

.service('products', function($resource){

        this.products_list = $resource('http://127.0.0.1:7070/api/v1/product/list');
});