/*global angular firebase  */
angular.module('esqueleto')
    .controller('editproduccionController', function($scope, $routeParams, $route, $firebaseObject, $firebaseArray) {
        'use strict';

        //Randomizer
        var uniqid = Date.now();

        // Var & Firebase Ref (Routes Included)
        var ref = firebase.database().ref();
        $scope.id = $routeParams.id;
        $scope.produccion = $firebaseObject(ref.child('Portfolio/produccion/' + $scope.id));
        $scope.addies = $firebaseArray(ref.child('Portfolio/produccion/' + $scope.id + '/Addon'))
        $scope.talents = $firebaseArray(ref.child('Portfolio/produccion/' + $scope.id + '/Featalent'))

        $scope.sosocial = $firebaseArray(ref.child('Portfolio/produccion/' + $scope.id + '/Featalent'));

        // Upload Thumbnail
        $scope.uThumbnail = function(e) {

            uploader.className = "on";
            var file = e.target.files[0];
            var storageRef = firebase.storage().ref('produccion/' + uniqid + file.name)
            var task = storageRef.put(file);
            task.on('state_changed', function progress(snapshot) {
                    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    uploader.value = percentage;
                },
                function error(err) {},
                function complete() {
                    storageRef.getDownloadURL().then(function(url) {
                        ref.child('Portfolio/produccion/' + $scope.id + '/Thumbnail').set(url);
                    });

                    setTimeout(function() {
                        uploader.className = "off";
                    }, 1000);
                }
            );
        }

        $scope.uHeader = function(e) {

            uploader.className = "on";
            var file = e.target.files[0];
            var storageRef = firebase.storage().ref('produccion/' + uniqid + file.name)
            var task = storageRef.put(file);
            task.on('state_changed', function progress(snapshot) {
                    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    uploader.value = percentage;
                },
                function error(err) {},
                function complete() {
                    storageRef.getDownloadURL().then(function(url) {
                        ref.child('Portfolio/produccion/' + $scope.id + '/Header').set(url);
                    });

                    setTimeout(function() {
                        uploader.className = "off";

                    }, 1000);
                }
            );
        }

        $scope.newAddonImg = function() {
            var numAddons = $scope.addies.length;
            ref.child('Portfolio/produccion/' + $scope.id + '/Addon/').push({
                Order: numAddons + 1,
                Type: "imgvid"
            });
        }
        $scope.newAddonText = function() {
            var numAddons = $scope.addies.length;
            ref.child('Portfolio/produccion/' + $scope.id + '/Addon/').push({
                Order: numAddons + 1,
                Type: "m-04 paragraph"
            });
        }
        $scope.newAddonTwoc = function() {
            var numAddons = $scope.addies.length;
            ref.child('Portfolio/produccion/' + $scope.id + '/Addon/').push({
                Order: numAddons + 1,
                Type: "twoc"
            });
        }
        $scope.newAddonQuote = function() {
            var numAddons = $scope.addies.length;
            ref.child('Portfolio/produccion/' + $scope.id + '/Addon/').push({
                Order: numAddons + 1,
                Type: "m-01 quote"
            });
        }
        $scope.newAddonEmbed = function() {
            var numAddons = $scope.addies.length;
            ref.child('Portfolio/produccion/' + $scope.id + '/Addon/').push({
                Order: numAddons + 1,
                Type: "embed"
            });
        }

        $scope.newFeatalent = function() {
            $firebaseArray(ref.child('Portfolio/produccion/' + $scope.id + '/Featalent/').push({
                Type: "Featalent",
                TalentID: null
            }));
        };


        $scope.upTalent = function(item) {
            console.log(item.TalentID)
            $firebaseArray(ref.child('Portfolio/talento/' + item.TalentID + '/Featalent/' + $scope.id).set({
                Type: "Featalent",
                From: "produccion",
                id: $scope.id
            }));
        }

        $scope.DelSoc = function(item) {
            console.log(item);
            console.log(item.$id);
            var SID = item.$id;
            console.log('Portfolio/talento/' + item.TalentID + '/Featalent/' + $scope.id);
            try {
                $firebaseArray(ref.child('Portfolio/talento/' + item.TalentID + '/Featalent/' + $scope.id).set(null));
            } catch (e) {} finally {
                $firebaseArray(ref.child('Portfolio/produccion/' + $scope.id + '/Featalent/' + SID).set(null));
                $scope.talents.$save();
            }

        }


        $scope.upNum = function(e, item) {
            var PID = e.srcElement.id;
            var POrder = item.Order;
            var POrderM = item.Order - 1;
            var POrderP = item.Order + 1;

            for (var i in $scope.addies) {
                if ($scope.addies[i] != null) {
                    if ($scope.addies[i].Order) {
                        if ($scope.addies[i].Order == POrderM) {
                            try {
                                var OID = $scope.addies[i].$id;
                                $firebaseArray(ref.child('Portfolio/produccion/' + $scope.id + '/Addon/' + OID + '/Order').set(POrder));
                                $scope.rndie();
                            } catch (e) {} finally {
                                $firebaseArray(ref.child('Portfolio/produccion/' + $scope.id + '/Addon/' + PID + '/Order').set(POrderM));
                            }
                        }
                    }
                }
            }
        }
        $scope.downNum = function(e, item) {

            var PID = e.srcElement.id;
            var POrder = item.Order;
            var POrderM = item.Order - 1;
            var POrderP = item.Order + 1;

            for (var i in $scope.addies) {
                if ($scope.addies[i] != null) {
                    if ($scope.addies[i].Order) {
                        if ($scope.addies[i].Order == POrderP) {
                            try {
                                var OID = $scope.addies[i].$id;
                                $firebaseArray(ref.child('Portfolio/produccion/' + $scope.id + '/Addon/' + OID + '/Order').set(POrder));
                            } catch (e) {} finally {
                                $firebaseArray(ref.child('Portfolio/produccion/' + $scope.id + '/Addon/' + PID + '/Order').set(POrderP));
                            }
                        }
                    }
                }
            }
        }

        $scope.deleteAddonie = function(e, item) {
            var thisadd = item.$id;
            var thisOrder = item.Order;

            for (var i in $scope.addies) {
                if ($scope.addies[i] != null) {
                    if ($scope.addies[i].Order) {
                        if ($scope.addies[i].Order > thisOrder) {
                            var OID = $scope.addies[i].$id;
                            var RVAL = $scope.addies[i].Order;
                            var NVAL = RVAL - 1;
                            try {
                                var OID = $scope.addies[i].$id;
                                var RVAL = $scope.addies[i].Order;
                                var NVAL = RVAL - 1;
                                $firebaseArray(ref.child('Portfolio/produccion/' + $scope.id + '/Addon/' + OID + '/Order').set(NVAL));
                            } catch (e) {} finally {
                                try {} catch (e) {}
                            }
                        }
                    }
                }
            }
            $firebaseArray(ref.child('Portfolio/produccion/' + $scope.id + '/Addon/' + thisadd).set(null));
        }

        $scope.ChangeIMG = function(e) {
            var THEID = e.srcElement.id;
            var file = e.target.files[0];
            var tipo = file.type;
            var storageRef = firebase.storage().ref('produccion/' + uniqid + file.name)
            var task = storageRef.put(file);
            task.on('state_changed', function progress(snapshot) {
                    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                },
                function error(err) {},
                function complete() {
                    storageRef.getDownloadURL().then(function(url) {
                        ref.child('Portfolio/produccion/' + $scope.id + '/Addon/' + THEID + '/Src').set(url);
                        ref.child('Portfolio/produccion/' + $scope.id + '/Addon/' + THEID + '/Tipo').set(tipo);
                    });
                    setTimeout(function() {}, 1000);
                }
            );
        }
    });