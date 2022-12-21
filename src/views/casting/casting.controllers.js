/*global angular firebase  */
angular.module('esqueleto')
    .controller('castingController', function ($scope,MetadataService,$rootScope) {
    'use strict';
    
    $scope.clubz = true;
    $scope.turnthison = {set: false};
    

    if ($scope.realan == 'eng') {
        MetadataService.setMetaTags({
           title: 'In The Park'
        });
    } else {
        MetadataService.setMetaTags({
           title: 'In The Park'
        });
    }

    window.onload = function() {
        
        $scope.filtEsp.TagsE = '' ;
        $scope.filtEsp.Tags = '' ;
        
      
        
    };
    
    $scope.filtEsp.TagsE = '' ;
    
    
    
    $scope.openfil = function (){
        document.getElementById("fil").className= "on";
        document.getElementById("filemon").className= "on";
        document.getElementById("filter").className= "asd";
        $scope.FilTime = 'Open';
        $scope.fiasco();
        $scope.mason();
    }
    $scope.closefil = function (){
        document.getElementById("fil").className= "off";
        document.getElementById("filemon").className= "off";
        document.getElementById("filter").className= "apagadooo";
        $scope.FilTime = 'Closed';
        $scope.mason();
    }
//    $scope.closefil = function (){
//        document.getElementById("fil").className= "off";
//        document.getElementById("filemon").className= "off";
//        $scope.FilTime = 'Closed';
//        $scope.filtEsp.Tags = '';
//        $scope.mason();
//    }
    $scope.closefilrr = function (){
        document.getElementById("fil").className= "off";
        document.getElementById("filemon").className= "off";
        document.getElementById("filter").className= "apagadooo";
        $scope.FilTime = 'Closed';
        $scope.mason();
    }
    
    $scope.filtFun = function (e) {
        $scope.turnthison.set = !$scope.turnthison.set;
        $scope.filtEsp.Tags = e.srcElement.id;
        $scope.mason();
    }
    $scope.filtFunE = function (e) {
        $scope.turnthison.set = !$scope.turnthison.set;
        $scope.filtEsp.TagsE = e.srcElement.id;
        $scope.mason();
        
    }
    
    $scope.fiasco = function() {

        setTimeout(function(){ 
            
           var whereismymind = window.pageYOffset || document.documentElement.scrollTop;
        console.log(whereismymind);
        window.scrollTo (0, whereismymind - 4);
        }, 180);
        
    }
    
    $scope.thereload = function () {
        window.location.reload();
    }
    
    

});