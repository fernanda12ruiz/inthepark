/*global angular firebase  */
angular.module('esqueleto')
    .controller('headerController', function($scope, $firebaseObject, $firebaseArray, $route, $routeParams, $location) {
        'use strict';

        var ref = firebase.database().ref();
        $scope.nswitch = $firebaseObject(ref.child('Portfolio/Settings/Splash'));
        $scope.LoaderLoader = $firebaseObject(ref.child('Portfolio/loader'));
        $scope.sessionVideo = sessionStorage.getItem('sessionVideo');
        $scope.route = $route;
        $scope.location = $location.path();
        $scope.mobileIcon = false;
        $scope.navMobile = function() {
            // var mobileOn = document.getElementById('navMobile').style.top
            // if (mobileOn == '45px'){
            //     document.getElementById('navMobile').style.top = '-150px';
            //     $scope.mobileIcon = false;
            // }
            // else{
            //     document.getElementById('navMobile').style.top = '45px';
            //     $scope.mobileIcon = true;
            // }
            var hdr = document.getElementById('header');
            hdr.classList.toggle('show');
            if ($scope.mobileIcon == false) {
                $scope.mobileIcon = true;
            } else if ($scope.mobileIcon == true) {
                $scope.mobileIcon = false;
            }
        }

        $scope.sessionVideo = sessionStorage.getItem('sessionVideo');
        $scope.removeSessionVideo = function() {
            console.log(sessionStorage.getItem('sessionVideo'));
            sessionStorage.setItem('sessionVideo', 'off');
            document.getElementById('blockie').classList.add("hidie");
            document.getElementById('modiediedie').classList.add("true");
            document.getElementById('logielogie').classList.add("hidie");
        }


        $scope.$on('$locationChangeSuccess', function(event) {
            location.reload();
        });
    });