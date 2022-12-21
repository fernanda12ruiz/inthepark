/*global angular firebase  */
angular.module('esqueleto')
    .controller('talentoidController', function($scope, $rootScope, $routeParams, $route, $firebaseObject, $firebaseArray, $sanitize, $http, $sce, MetadataService) {
        'use strict';

        var ref = firebase.database().ref();


        document.addEventListener('keydown', logKey);



        $scope.id = $routeParams.id;


        $scope.theproject = $firebaseObject(ref.child('Portfolio/talento/' + $scope.id));


        $scope.Addoniess = $firebaseArray(ref.child('Portfolio/talento/' + $scope.id + '/Addon'));

        $scope.Featalent = $firebaseArray(ref.child('Portfolio/talento/' + $scope.id + '/Featalent'));


        console.log($scope.Featalent);



        $scope.allFeat = [];




        $scope.Featalent.$loaded()
            .then(function() {
                angular.forEach($scope.Featalent, function(value, key) {
                    $scope.allFeat.push($firebaseObject(ref.child('Portfolio/' + value.From + '/' + value.id)));


                })
            });









        $scope.theproject.$loaded().then(function(data) {
            // Store into service, SERVICE CALL
            MetadataService.setMetaTags({
                //    title: 'In The Park' + $scope.theproject.Title,
                title: 'In The Park',
                description: $scope.theproject.Description,
                keywords: $scope.theproject.Metatags ? $scope.theproject.Metatags : $scope.theproject.Tags
                    //
            });
            window.prerenderReady = true;
            console.log(window.prerenderReady);
            console.log($rootScope.metatags);
            $rootScope.metatags.description = $scope.theproject.DescriptionE + ' ' + $scope.theproject.Description
                // DO WHATEVER
        })

        $scope.closeSliderrr = function() {
            document.getElementById('slider-block').classList.remove('on');
        }

        $scope.openSliderrr = function(event) {

            // GetIDNum
            var imgSliderID = event.target.id;
            document.getElementById('slider-block').classList.add('on');

            // Get Percentage
            var percentageSlider = (imgSliderID - 1) * 100;
            document.getElementById('holder').style.marginTop = '-' + percentageSlider + 'vh';

            // CheckForFirst
            if (imgSliderID == 1) {
                document.getElementById('arrow-left').classList.add('off');
            } else {
                document.getElementById('arrow-left').classList.remove('off');
            }

            // CheckForLast
            var maybeLastNumString = (event.target.id);
            var maybeLastNumNum = parseInt(maybeLastNumString, 10);
            var maybeLastNum = maybeLastNumNum + 1;
            var maybeLastID = "imageOnSlider" + maybeLastNum;
            var maybeLast = document.getElementById(maybeLastID);
            if (maybeLast) {
                document.getElementById('arrow-right').classList.remove('off');
            } else {
                document.getElementById('arrow-right').classList.add('off');
            }

        }

        $scope.prevSliderrr = function() {

            var holderPosition = document.getElementById('holder').style.marginTop
            var holderPositionNumNum = parseInt(holderPosition, 10);
            var holderPositionNum = (holderPositionNumNum) / (-100);


            if (holderPositionNum >= 1) {

                var holderPosition = document.getElementById('holder').style.marginTop
                var holderPositionNumNum = parseInt(holderPosition, 10);
                var holderPositionNum = (holderPositionNumNum) / (-100);

                if (holderPositionNumNum != -100) {
                    var newHolderPosition = holderPositionNumNum + 100;
                    document.getElementById('holder').style.marginTop = newHolderPosition + 'vh';
                    document.getElementById('arrow-left').classList.remove('off');
                } else if (holderPositionNumNum >= 0) {
                    document.getElementById('holder').style.marginTop = '0vh';
                    document.getElementById('arrow-left').classList.add('off');
                } else {
                    var newHolderPosition = holderPositionNumNum + 100;
                    document.getElementById('holder').style.marginTop = newHolderPosition + 'vh';
                    document.getElementById('arrow-left').classList.add('off');
                }


                var maybeLastNum = holderPositionNum + 1;
                var maybeLastID = "imageOnSlider" + maybeLastNum;
                var maybeLast = document.getElementById(maybeLastID);
                if (maybeLast) {
                    document.getElementById('arrow-right').classList.remove('off');
                } else {
                    document.getElementById('arrow-right').classList.add('off');
                }

            }


        }
        $scope.nextSliderrr = function() {
            var scrolled = document.getElementById('holder').offsetTop;
            var scrolledPositive = scrolled * -1;
            var boxSize = document.getElementById('holder').offsetHeight;
            var scrolledPositiveWindow = scrolledPositive + window.innerHeight;
            var scoreLast = boxSize - scrolledPositiveWindow;


            if (scoreLast >= 10) {

                var holderPosition = document.getElementById('holder').style.marginTop
                var holderPositionNumNum = parseInt(holderPosition, 10);
                var holderPositionNum = (holderPositionNumNum) / (-100);
                var maybeLastNum = holderPositionNum + 3;
                var maybeLastID = "imageOnSlider" + maybeLastNum;
                var maybeLast = document.getElementById(maybeLastID);
                if (maybeLast) {
                    var newHolderPosition = holderPositionNumNum - 100;
                    document.getElementById('holder').style.marginTop = newHolderPosition + 'vh';
                    document.getElementById('arrow-right').classList.remove('off');
                    document.getElementById('arrow-left').classList.remove('off');
                } else {
                    var newHolderPosition = holderPositionNumNum - 100;
                    document.getElementById('holder').style.marginTop = newHolderPosition + 'vh';
                    document.getElementById('arrow-right').classList.add('off');
                    document.getElementById('arrow-left').classList.remove('off');
                }

            }


        }


        function logKey(e) {
            if (document.getElementById('slider-block').classList.contains('on')) {
                if (e.code === 'ArrowRight') {
                    $scope.nextSliderrr();
                } else if (e.code === 'ArrowLeft') {
                    $scope.prevSliderrr();
                }
            }
        }


    });