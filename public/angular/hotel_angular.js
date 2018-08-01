var app = angular.module('RestaurantApp', ['config', 'ngCookies', 'ui-notification', 'ngSanitize']);



function url_base64_decode(str) {
    var output = str.replace('-', '+').replace('_', '/');
    switch (output.length % 4) {
        case 0:
            break;
        case 2:
            output += '==';
            break;
        case 3:
            output += '=';
            break;
        default:
            throw 'Illegal base64url string!';
    }
    return window.atob(output);
}

var baseAddress = config_module._invokeQueue[0][2][1].LOGIN_URL;

var url = "";

app.factory('RestaurantFactory', function ($http, $window) {

    return {


        getcollections: function () {
            baseAddress = "http://localhost:6060/"
            //      baseAddress = "http://sodiotech.com/"

            url = baseAddress + "GetCollections";
            return $http.get(url);

        }


    }
})





app.controller('RestaurantController', function PostController($scope, RestaurantFactory, $cookies, $cookieStore, $window, $location, Notification) {



    // GET ALL THE COLLECTIONS IN BANGALORE

    RestaurantFactory.getcollections().success(function (list) {

        $scope.actualResponse = list;


        console.log("$scope.actualResponse.collections[0] == ", $scope.actualResponse.collections[0]);

    }).error(function (list) {
        //  $scope.error = "An Error has occured while Loading teacher! " + list.ExceptionMessage;
        //   console.log($scope.error);
    });






});