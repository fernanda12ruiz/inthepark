/*global angular firebase  */
angular.module('esqueleto')
    .controller('terminosController', function ($scope,MetadataService) {
    'use strict';

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
        
       
        
    };
    
    
    

});