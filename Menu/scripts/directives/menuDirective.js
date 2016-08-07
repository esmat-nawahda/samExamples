/**
 * Created by PoInTer on 8/7/2016.
 */
var app = angular.module('myApp');

app.directive('menu', function() {
    return {
        restrict: 'A',
        scope: {
            menu: '=menu',
            cls: '=ngClass'
        },
        replace: true,
        template: '<ul><li ng-repeat="item in menu" menu-item="item"></li></ul>',
        link: function(scope, element, attrs) {
            element.addClass(attrs.class);
            element.addClass(scope.cls);
        }
    };
});

app.directive('menuItem', function($compile) {
    return {
        restrict: 'A',
        replace: true,
        scope: {
            item: '=menuItem'
        },
        template: '<li active-link><a href={{item.href}}>{{item.title}}</a></li>',
        link: function (scope, element, attrs) {
            if (scope.item.header) {
                element.addClass('nav-header');
                element.text(scope.item.header);
            }
            if (scope.item.divider) {
                element.addClass('divider');
                element.empty();
            }
            if (scope.item.submenu) {
                element.addClass('dropdown');

                var text = element.children('a').text();
                element.empty();
                var $a = $('<a class="dropdown-toggle">'+text+'</a>');
                element.append($a);

                var $submenu = $('<div menu="item.submenu" class="dropdown-menu"></div>');
                element.append($submenu);
            }
            if (scope.item.click) {
                element.find('a').attr('ng-click', 'item.click()');
            }
            $compile(element.contents())(scope);
        }
    };
});