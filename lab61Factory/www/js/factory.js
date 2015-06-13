angular.module('lab61.Factories', [] )

.factory('information', function() { //information es el nombre de la factory e¿del moduo lab61.factories

        var data = {};

        data.first_name = '';

        data.last_name = '';

        data.email = '';

        return data;
});