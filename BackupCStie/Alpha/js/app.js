angular.module("esqueleto",["ngRoute","ngResource","LocalStorageModule","ngCookies","ngSanitize","firebase","ngMap"]).config(function($routeProvider,MyRoutesProvider){"use strict";var MyRoutes=MyRoutesProvider.$get();angular.forEach(MyRoutes,function(route){$routeProvider.when(route.path,route.options)}),$routeProvider.otherwise({redirectTo:"/"})}).run(function($rootScope,MyRoutes){"use strict";$rootScope.$on("$routeChangeStart",function(e,next){}),$rootScope.$on("$routeChangeSuccess",function(){window.scrollTo(0,0)})}).controller("main",function($scope,$route,$firebaseObject,$firebaseArray,$firebaseAuth){"use strict";$scope.$route=$route;var config={apiKey:"AIzaSyAKpbpN3Bv0_HccYmPlWCgy97QUNdbTze0",authDomain:"communaldatab.firebaseapp.com",databaseURL:"https://communaldatab.firebaseio.com",storageBucket:"communaldatab.appspot.com",messagingSenderId:"475352725531"};firebase.initializeApp(config);var ref=firebase.database().ref();$scope.projects=$firebaseArray(ref.child("Portfolio/Projects/")),$scope.homeSettings=$firebaseObject(ref.child("Portfolio/Home")),$scope.studioSettings=$firebaseObject(ref.child("Portfolio/Studio")),$scope.studioServicesL=$firebaseObject(ref.child("Portfolio/Studio/Services/Left")),$scope.studioServicesR=$firebaseObject(ref.child("Portfolio/Studio/Services/Right")),$scope.studioSettingsSocial=$firebaseArray(ref.child("Portfolio/Studio/Social")),$scope.footerSettings=$firebaseObject(ref.child("Portfolio/Settings/Footer")),$scope.Connect=$firebaseObject(ref.child("Portfolio/Settings/Footer/Connect")),$scope.Contact=$firebaseObject(ref.child("Portfolio/Settings/Footer/Contact")),$scope.toEnglish=function(){$scope.lang="eng"},$scope.toSpanish=function(){$scope.lang="esp"}}),angular.module("esqueleto").constant("SETTINGS",{hostSelected:"prod",hosts:{devl:{apiProtocol:"http",apiHost:"www.algo.org",apiPort:""},prod:{apiProtocol:"https",apiHost:"www.algo.org",apiPort:""}}}).constant("DIR",{hostSelected:"https://www.algo.org/"}).constant("STRING",{EMPTY:"",NOT_FOUND:-1,SPACE:" "}).constant("ARRAY",{NOT_FOUND:-1}).constant("USER_SESSION",{expire:{seconds:0,minutes:120,hours:0,days:0,months:0,years:0}}).constant("USER_ROLES",{all:"*",user:"player",guest:"guest"}),angular.module("esqueleto").directive("fixedToBody",function($rootScope){"use strict";return{link:function(scope,element,attrs){var $body=$("body"),$footer=$("footer");$footer.append($(element)),$body.css({marginBottom:40}),$rootScope.$on("$routeChangeStart",function(e,next){$(element).remove(),$body.css({marginBottom:0})})}}}).directive("numbersOnly",function(){"use strict";return{require:"ngModel",link:function(scope,element,attrs,modelCtrl){modelCtrl.$parsers.push(function(inputValue){if(void 0==inputValue)return"";var transformedInput=inputValue.replace(/[^0-9]/g,"");return transformedInput!=inputValue&&(modelCtrl.$setViewValue(transformedInput),modelCtrl.$render()),transformedInput})}}}).directive("forceInt",function(){"use strict";return{require:"ngModel",link:function(scope,element,attrs,controller){controller.$parsers.push(function(value){return"string"==typeof value&&(value=parseInt(value,10),controller.$setViewValue(value),controller.$render()),value})}}}).directive("wmBlock",function($parse){"use strict";return{scope:{wmBlockLength:"="},link:function(scope,elm,attrs){elm.bind("keypress",function(e){if(elm[0].value.length>scope.wmBlockLength)return e.preventDefault(),!1})}}}),angular.module("esqueleto").factory("MyRoutes",function(){"use strict";var routes=[{path:"/",options:{templateUrl:"home/home.view.html",controller:"homeController"}},{path:"/work",options:{templateUrl:"work/work.view.html",controller:"workController"}},{path:"/project/:id",options:{templateUrl:"project/project.view.html",controller:"projectController"}},{path:"/studio",options:{templateUrl:"studio/studio.view.html",controller:"studioController"}},{path:"/newproject",options:{templateUrl:"newproject/newproject.view.html",controller:"newprojectController"}},{path:"/dashboard",options:{templateUrl:"dashboard/dashboard.view.html",controller:"dashboardController"}},{path:"/projectssettings",options:{templateUrl:"projectssettings/projectssettings.view.html",controller:"projectssettingsController"}},{path:"/editproject/:id",options:{templateUrl:"editproject/editproject.view.html",controller:"editprojectController"}},{path:"/homesettings",options:{templateUrl:"homesettings/homesettings.view.html",controller:"homesettingsController"}},{path:"/studiosettings",options:{templateUrl:"studiosettings/studiosettings.view.html",controller:"studiosettingsController"}},{path:"/login",options:{templateUrl:"login/login.view.html",controller:"loginController"}}];return routes}),angular.module("esqueleto").factory("InfoProductos",function(DIR,$resource){"use strict";return $resource(DIR.hostSelected+"myAPI/:id",{id:"@_id"})}),angular.module("esqueleto").factory("Almacen",function(localStorageService){"use strict";var almacen={},hashtable={},key="";return almacen.open=function(k){return k?(key=k,void(hashtable=localStorageService.get(key)?localStorageService.get(key):{})):void console.error("LOCAL STORAGE ERROR: PLEASE ENTER A KEY")},almacen.update=function(pkey){key=pkey||key,localStorageService.set(key,hashtable)},almacen.write=function(data){hashtable=data,almacen.update()},almacen.read=function(pkey){return key=pkey||key,almacen.open(key),hashtable},almacen.clean=function(){hashtable={},almacen.update()},almacen.remove=function(pkey){key=pkey||key,localStorageService.remove(key)},almacen.empty=function(pkey){return almacen.read(pkey),$.isEmptyObject(hashtable)},almacen}),angular.module("esqueleto").controller("dashboardController",function($scope){"use strict"}),angular.module("esqueleto").controller("editprojectController",function($scope,$routeParams,$route,$firebaseObject,$firebaseArray){"use strict";var ref=firebase.database().ref();$scope.id=$routeParams.id,$scope.project=$firebaseObject(ref.child("Portfolio/Projects/"+$scope.id))}),angular.module("esqueleto").controller("footerController",function($scope,$firebaseObject,$firebaseArray){"use strict"}),angular.module("esqueleto").controller("headerController",function($scope,$firebaseObject,$firebaseArray){"use strict"}),angular.module("esqueleto").controller("homeController",function($scope){"use strict"}),angular.module("esqueleto").controller("homesettingsController",function($scope){"use strict"}),angular.module("esqueleto").controller("homeController",function($scope){"use strict"}),angular.module("esqueleto").controller("newprojectController",function($scope,$routeParams,$route,$firebase,$firebaseObject,$firebaseArray){"use strict";$scope.newP=function(){var ref=firebase.database().ref();ref.child("Portfolio/Projects/").push({Addon:{"01":{Src:"http://a1.dspncdn.com/media/692x/a9/54/b9/a954b961e5e900eebce63ca487850262.jpg",Type:"imgvid"},"02":{Src:"Poke coloring book godard pug ugh, vegan asymmetrical deep v offal unicorn quinoa. Gochujang actually vexillologist roof party, swag blue bottle mixtape. Seitan photo booth bitters, salvia tumblr shabby chic fingerstache selvage succulents tote bag. Mustache shabby chic humblebrag heirloom, listicle hell of aesthetic 3 wolf moon cliche kitsch try-hard lomo post-ironic. Pitchfork blog plaid cronut austin. Fixie poke sriracha readymade. Messenger bag hammock tattooed sartorial, biodiesel polaroid portland vaporware letterpress umami taxidermy.",Type:"text"},"03":{Src:"Beard gochujang slow-carb glossier tilde, mustache jianbing vexillologist pinterest kinfolk. Mlkshk forage bushwick fixie. Stumptown gluten-free tacos, hell of organic cold-pressed DIY chicharrones microdosing helvetica disrupt chillwave meggings lyft freegan. Bitters marfa salvia quinoa yuccie, neutra crucifix scenester chartreuse mumblecore air plant la croix vexillologist. Retro authentic DIY hella air plant gastropub, pitchfork narwhal taxidermy leggings keytar meggings tilde. Jean shorts paleo chicharrones artisan slow-carb. Beard affogato man braid woke, subway tile drinking vinegar gentrify poutine mixtape pabst selfies brooklyn jean shorts cred everyday carry.",Type:"twoc"}},Credits:{Areas:{"01":"Branding","02":"Web Design"},People:{"01":"Creative Director: KK","02":"Design Team: Marcela Benavides"}},Description:$scope.pro.Description,DescriptionE:$scope.pro.DescriptionE,Header:"http://a1.dspncdn.com/media/692x/23/54/97/235497a2442efa0fb8471728130a5518.jpg",Name:$scope.pro.Name,NameE:$scope.pro.NameE,Settings:{Ratio:$scope.pro.Ratio},Tags:$scope.pro.Tags,TagsE:$scope.pro.TagsE,Thumbnail:"http://a1.dspncdn.com/media/692x/23/54/97/235497a2442efa0fb8471728130a5518.jpg",Title:$scope.pro.Title,TitleE:$scope.pro.TitleE,Visible:"Off"})};var uploader=document.getElementById("uploader"),fileButton=document.getElementById("fileButton");fileButton.addEventListener("change",function(e){var file=e.target.files[0],storageRef=firebase.storage().ref("projects/"+file.name),task=storageRef.put(file);task.on("state_changed",function(snapshot){var percentage=snapshot.bytesTransferred/snapshot.totalBytes*100;uploader.value=percentage},function(err){},function(){})})}),angular.module("esqueleto").controller("projectController",function($scope,$routeParams,$route,$firebaseObject,$firebaseArray){"use strict";var ref=firebase.database().ref();$scope.id=$routeParams.id,$scope.theproject=$firebaseObject(ref.child("Portfolio/Projects/"+$scope.id))}),angular.module("esqueleto").controller("projectssettingsController",function($scope){"use strict"}),angular.module("esqueleto").controller("studioController",function($scope){"use strict"}),angular.module("esqueleto").controller("studiosettingsController",function($scope){"use strict"}),angular.module("esqueleto").controller("workController",function($scope){"use strict"});