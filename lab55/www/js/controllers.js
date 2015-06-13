'use strict';

angular.module('lab57.Controllers', [])

.controller('ListController', function($scope, $state) {

        $scope.changePage = function(){

            $state.go( 'view', { id: 4 } );

        }
})

.controller('ViewController', function($scope, $stateParams, $ionicHistory) {

        console.log( $stateParams.id );

        if ( parseInt( $stateParams.id )  === 1 ) {

            console.log( 'on id = 1' );

             $scope.elements_ionic = '<div class="list">'+
                                      '<label class="item item-input">'+
                                        '<input type="text" placeholder="First Name">'+
                                      '</label>'+
                                     ' <label class="item item-input">'+
                                        '<input type="text" placeholder="Last Name">'+
                                      '</label>'+
                                      '<label class="item item-input">'+
                                        '<textarea placeholder="Comments"></textarea>'+
                                      '</label>'+
                                    '</div>';

            var list_element = angular.element( document.querySelector( '#elements' ) );

            list_element.append( $scope.elements_ionic );

        } else if ( parseInt( $stateParams.id )  === 2 ) {

             $scope.elements_ionic = '<div class="list">'+
                                      '<div class="item item-button-right">'+
                                          'Call Ma'+
                                          '<button class="button button-positive">'+
                                            '<i class="icon ion-ios-telephone"></i>'+
                                          '</button>'+
                                        '</div>'+
                                        '<div class="item item-button-right">'+
                                          'Call Love'+
                                          '<button class="button button-positive">'+
                                            '<i class="icon ion-ios-heart"></i>'+
                                          '</button>'+
                                        '</div>'+
                                        '<div class="item item-button-right">'+
                                          'Call Boss'+
                                          '<button class="button button-positive">'+
                                            '<i class="icon ion-ios-star"></i>'+
                                          '</button>'+
                                        '</div>'+
                                      '</div>';

            var list_element = angular.element( document.querySelector( '#elements' ) );

            list_element.append( $scope.elements_ionic );

        } else if ( parseInt( $stateParams.id )  === 3 ) {

            $scope.elements_ionic = '<div class="list">'+
                                    '<button class="button button-block">'+
                                    '  Default'+
                                    '</button>'+
                                    '<button class="button button-block button-light">'+
                                    '  button-light'+
                                    '</button>'+
                                    '<button class="button button-block button-stable">'+
                                    '  button-stable'+
                                    '</button>'+
                                    '<button class="button button-block button-positive">'+
                                    '  button-positive'+
                                    '</button>'+
                                    '<button class="button button-block button-calm">'+
                                    '  button-calm'+
                                    '</button>'+
                                    '<button class="button button-block button-balanced">'+
                                    '  button-balanced'+
                                    '</button>'+
                                    '<button class="button button-block button-energized">'+
                                    '  button-energized'+
                                    '</button>'+
                                    '</div>';

            var list_element = angular.element( document.querySelector( '#elements' ) );

            list_element.append( $scope.elements_ionic );

        } else {

            $scope.elements_ionic = '<h4>Grid: Evenly Spaced Columns</h4>' +
                                    '<div class="row">' +
                                        '<div class="col">.col</div>' +
                                        '<div class="col">.col</div>' +
                                        '<div class="col">.col</div>' +
                                        '<div class="col">.col</div>' +
                                        '<div class="col">.col</div>' +
                                    '</div><br/>' +
                                    '<h4>Grid: Explicit Column Sizes</h4>' +
                                    '<div class="row">'+
                                    '<div class="col col-50">.col.col-50</div>'+
                                    '<div class="col">.col</div>'+
                                    '<div class="col">.col</div>'+
                                    '</div>' +
                                    '<div class="row">'+
                                        '<div class="col col-75">.col.col-75</div>'+
                                        '<div class="col">.col</div>'+
                                    '</div>' +
                                    '<div class="row">'+
                                        '<div class="col">.col</div>'+
                                        '<div class="col col-75">.col.col-75</div>'+
                                    '</div>' +
                                    '<div class="row">'+
                                        '<div class="col">.col</div>'+
                                        '<div class="col">.col</div>'+
                                    '</div>';

            var list_element = angular.element( document.querySelector( '#elements' ) );

            list_element.append( $scope.elements_ionic );

        }


        $scope.goBack = function(){

            $ionicHistory.goBack();

        }
});