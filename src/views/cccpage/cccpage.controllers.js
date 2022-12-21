/*global angular firebase  */
angular.module('esqueleto')
    .controller('cccpageController', function ($scope, $firebaseObject, $firebaseArray, $http) {
    'use strict';
    
    
    
    var ref = firebase.database().ref();
    
    $scope.page = $firebaseArray(ref.child('Portfolio/page/'));

    // on and off
    $scope.visible = function(i){
      
    $scope.ppp = $scope.page[i].$id;
    $scope.vvv = $scope.page[i].Visible;
      
    $firebaseObject(ref.child('Portfolio/page/' + $scope.ppp + '/Visible').set($scope.vvv));  
        
  }
    
    
    
    $scope.getPLenght = function(e, item) {
        
//Lenght
//        console.log($scope.page.length);
//Retrieve Element
//        console.log(e);
//ID To Set
        var PID = e.srcElement.id;
        console.log(PID);
//Position in Repeat
        var PORDER = $scope.page.indexOf(item);
        console.log(PORDER);
//Get Order From Firebase
        $scope.FORDER = $firebaseArray(ref.child('Portfolio/page/'));
        console.log($scope.FORDER);
        
    }
    
    
    $scope.upNum = function(e, item){
        
        var PID = e.srcElement.id;
        
        var POrder = item.Order;
        
        var POrderM = item.Order - 1;
        
        var POrderP = item.Order + 1;
        
		for(var i in $scope.page){
			if($scope.page[i] != null){
				if($scope.page[i].Order){
                    if($scope.page[i].Order == POrderM){
                        
                        
                        
                        
                        try {
                            
                            var OID = $scope.page[i].$id;
                            $firebaseArray(ref.child('Portfolio/page/' + OID + '/Order').set(POrder)); 
                        
                            $scope.rndie();
                            
                        }
                        catch (e) {
                        }
                        finally {
                            $firebaseArray(ref.child('Portfolio/page/' + PID + '/Order').set(POrderM)); 
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
        
		for(var i in $scope.page){
			if($scope.page[i] != null){
				if($scope.page[i].Order){
                    if($scope.page[i].Order == POrderP){
                        
                        
                        
                        
                        try {
                            
                            var OID = $scope.page[i].$id;
                            $firebaseArray(ref.child('Portfolio/page/' + OID + '/Order').set(POrder)); 
                        
                            $scope.rndie();
                            
                        }
                        catch (e) {
                        }
                        finally {
                            $firebaseArray(ref.child('Portfolio/page/' + PID + '/Order').set(POrderP)); 
                        }
                        
                        
                        
                        
                    }
				}
			}
		}
	}
    
    $scope.toggleVisible = function(item) {
        var OID = item.$id;
        for(var i in $scope.page){
			if($scope.page[i] != null && typeof $scope.page[i] === 'object'){
				if($scope.page[i].$id){
                    if($scope.page[i].$id === item.$id){
                        if($scope.page[i].Visible === 'On'){
                            try {
                                var OID = $scope.page[i].$id;
                                $firebaseArray(ref.child('Portfolio/page/' + OID + '/Visible').set('Off')); 
                            }
                            catch (e) {
                            }
                        } else {
                            try {
                                var OID = $scope.page[i].$id;
                                $firebaseArray(ref.child('Portfolio/page/' + OID + '/Visible').set('On')); 
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
        for(var i in $scope.page){
			if($scope.page[i] != null && typeof $scope.page[i] === 'object'){
				if($scope.page[i].$id){
                    if($scope.page[i].$id === item.$id){
                        if($scope.page[i].Featured === 'Yes'){
                            try {
                                var OID = $scope.page[i].$id;
                                $firebaseArray(ref.child('Portfolio/page/' + OID + '/Featured').set('No')); 
                            }
                            catch (e) {
                            }
                        } else {
                            try {
                                var OID = $scope.page[i].$id;
                                $firebaseArray(ref.child('Portfolio/page/' + OID + '/Featured').set('Yes')); 
                            }
                            catch (e) {
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

        for(var i in $scope.page){
            if($scope.page[i] != null && typeof $scope.page[i] === 'object'){
                if($scope.page[i].Order){
                    if($scope.page[i].Order > POrder){




                        try {

                            var OID = $scope.page[i].$id;
                            var RVAL = $scope.page[i].Order;
                            var NVAL = RVAL - 1;
                            console.log(NVAL);
                            $firebaseArray(ref.child('Portfolio/page/' + OID + '/Order').set(NVAL)); 

                        }
                        catch (e) {
                        }
                        finally {
                            
                            try {

                            $firebaseArray(ref.child('Portfolio/page/' + PID).set(null)); 

                        }
                        catch (e) {
                        }
                            
                        }




                    }
                }
            } else {
                
                try{
                $firebaseArray(ref.child('Portfolio/page/' + PID).set(null)); 
                }
                catch (e) {
                        }
            }
        }
    }
    
    
});