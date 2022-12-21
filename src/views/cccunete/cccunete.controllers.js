/*global angular firebase  */
angular.module('esqueleto')
    .controller('cccuneteController', function ($scope, $firebaseObject, $firebaseArray, $http) {
    'use strict';
    
    
    
    var ref = firebase.database().ref();
    
    $scope.unete = $firebaseArray(ref.child('Portfolio/unete/'));
    $scope.unete = $firebaseArray(ref.child('Portfolio/unete/'));

    $scope.featured = $firebaseArray(ref.child('Portfolio/featured/'));

    // on and off
    $scope.visible = function(i){
      
    $scope.ppp = $scope.unete[i].$id;
    $scope.vvv = $scope.unete[i].Visible;
      
    $firebaseObject(ref.child('Portfolio/unete/' + $scope.ppp + '/Visible').set($scope.vvv));  
        
  }
    
    
    
    $scope.getPLenght = function(e, item) {
        
//Lenght
//        console.log($scope.unete.length);
//Retrieve Element
//        console.log(e);
//ID To Set
        var PID = e.srcElement.id;
        console.log(PID);
//Position in Repeat
        var PORDER = $scope.unete.indexOf(item);
        console.log(PORDER);
//Get Order From Firebase
        $scope.FORDER = $firebaseArray(ref.child('Portfolio/unete/'));
        console.log($scope.FORDER);
        
    }
    
    
    $scope.upNum = function(e, item){
        
        var PID = e.srcElement.id;
        
        var POrder = item.Order;
        
        var POrderM = item.Order - 1;
        
        var POrderP = item.Order + 1;
        
		for(var i in $scope.unete){
			if($scope.unete[i] != null){
				if($scope.unete[i].Order){
                    if($scope.unete[i].Order == POrderM){
                        
                        
                        
                        
                        try {
                            
                            var OID = $scope.unete[i].$id;
                            $firebaseArray(ref.child('Portfolio/unete/' + OID + '/Order').set(POrder)); 
                        
                            $scope.rndie();
                            
                        }
                        catch (e) {
                        }
                        finally {
                            $firebaseArray(ref.child('Portfolio/unete/' + PID + '/Order').set(POrderM)); 
                        }
                        
                        
                        
                        
                    }
				}
			}
		}
	}
    $scope.downNum = function(e, item){
        
        var PID = e.srcElement.id;
        
        var POrder = item.Order;
        
        var POrderM = item.Order - 1;
        
        var POrderP = item.Order + 1;
        
		for(var i in $scope.unete){
			if($scope.unete[i] != null){
				if($scope.unete[i].Order){
                    if($scope.unete[i].Order == POrderP){
                        
                        
                        
                        
                        try {
                            
                            var OID = $scope.unete[i].$id;
                            $firebaseArray(ref.child('Portfolio/unete/' + OID + '/Order').set(POrder)); 
                        
                            $scope.rndie();
                            
                        }
                        catch (e) {
                        }
                        finally {
                            $firebaseArray(ref.child('Portfolio/management/' + PID + '/Order').set(POrderP)); 
                        }
                        
                        
                        
                        
                    }
				}
			}
		}
	}
    
    $scope.toggleVisible = function(item) {
        var OID = item.$id;
        for(var i in $scope.management){
			if($scope.management[i] != null && typeof $scope.management[i] === 'object'){
				if($scope.management[i].$id){
                    if($scope.management[i].$id === item.$id){
                        if($scope.management[i].Visible === 'On'){
                            try {
                                var OID = $scope.management[i].$id;
                                $firebaseArray(ref.child('Portfolio/management/' + OID + '/Visible').set('Off')); 
                            }
                            catch (e) {
                            }
                        } else {
                            try {
                                var OID = $scope.management[i].$id;
                                $firebaseArray(ref.child('Portfolio/management/' + OID + '/Visible').set('On')); 
                            }
                            catch (e) {
                            }
                        }
                    }
				}
			}
		}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    }


    $scope.togglePIN = function(item) {
        var OID = item.$id;
        for(var i in $scope.management){
			if($scope.management[i] != null && typeof $scope.management[i] === 'object'){
				if($scope.management[i].$id){
                    if($scope.management[i].$id === item.$id){
                        if($scope.management[i].PIN === true){
                            try {
                                var OID = $scope.management[i].$id;
                                $firebaseArray(ref.child('Portfolio/management/' + OID + '/PIN').set(false)); 
                            }
                            catch (e) {
                            }
                        } else {
                            try {
                                var OID = $scope.management[i].$id;
                                $firebaseArray(ref.child('Portfolio/management/' + OID + '/PIN').set(true)); 
                            }
                            catch (e) {
                            }
                        }
                    }
				}
			}
		}
    }
    
    $scope.toggleFeatured = function(item) {
        var OID = item.$id;
        for(var i in $scope.management){
			if($scope.management[i] != null && typeof $scope.management[i] === 'object'){
				if($scope.management[i].$id){
                    if($scope.management[i].$id === item.$id){
                        if($scope.management[i].Featured === 'Yes'){
                            try {

                                var OID = $scope.management[i].$id;
                                $firebaseArray(ref.child('Portfolio/management/' + OID + '/Featured').set('No')); 

                            }
                            catch (e) {

                                var OID = $scope.management[i].$id;
                                $firebaseArray(ref.child('Portfolio/featured/' + OID).set({"id": OID, "section": "management"})); 

                            }
                        } else {
                            try {

                                var OID = $scope.management[i].$id;
                                $firebaseArray(ref.child('Portfolio/management/' + OID + '/Featured').set('Yes')); 

                            }
                            catch (e) {

                                var OID = $scope.management[i].$id;
                                $firebaseArray(ref.child('Portfolio/featured/' + OID).set(null)); 
                                
                            }
                        }
                    }
				}
			}
		}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    }
    
    $scope.productDelete = function(e, item){

        var PID = e.srcElement.id;

        var POrder = item.Order;

        var POrderM = item.Order - 1;

        var POrderP = item.Order + 1;

        for(var i in $scope.unete){
            if($scope.unete[i] != null && typeof $scope.unete[i] === 'object'){
                if($scope.unete[i].Order){
                    if($scope.unete[i].Order > POrder){




                        try {

                            var OID = $scope.unete[i].$id;
                            var RVAL = $scope.unete[i].Order;
                            var NVAL = RVAL - 1;
                            console.log(NVAL);
                            $firebaseArray(ref.child('Portfolio/unete/' + OID + '/Order').set(NVAL)); 

                        }
                        catch (e) {
                        }
                        finally {
                            
                            try {

                            $firebaseArray(ref.child('Portfolio/unete/' + PID).set(null)); 

                        }
                        catch (e) {
                        }
                            
                        }




                    }
                }
            } else {
                
                try{
                $firebaseArray(ref.child('Portfolio/unete/' + PID).set(null)); 
                }
                catch (e) {
                        }
            }
        }
    }
    
    
});