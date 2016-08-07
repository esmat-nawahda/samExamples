/**
 * Created by PoInTer on 8/7/2016.
 */
angular.module('myApp').controller('menuCtrl',
    function($rootScope, $scope, menuService) {

        $scope.loadMenu = function() {
            var getMenuServiceObj = menuService.getMenuService();
            $scope.menu = getMenuServiceObj;

        };




    });
