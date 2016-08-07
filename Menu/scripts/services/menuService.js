/**
 * Created by PoInTer on 8/7/2016.
 */

angular.module('servicesModule').factory('menuService', function() {
    return {

        getMenuService: function () {
            return [
                {
                    "title": "Movies",
                    "href": "#"
                },
                {
                    "title": "Classics",
                    "href": "#"
                },
                {
                    "title": "Drama",
                    "href": "#"
                },
                {
                    "title": "Kids",
                    "href": "#"
                },
                {
                    "title": "Genres",
                    "href": "#"
                }

            ];
        }

    }});
