'use strict';
angular.module('App', [
  "ui.router", 
  "ngAnimate",

  "html",

  "start"
])
.config(function($stateProvider) {
  $stateProvider
  .state("start", {
      url: "/start",
      controller: "StartCtrl",
      templateProvider: function($templateCache) {
        return $templateCache.get("start/start.html");
      }
    }
  )
})
.controller("AppCtrl", function($scope, $state) {
})
.run([ "$rootScope", "$state", "$stateParams", 
  function ($rootScope, $state, $stateParams) {
   $state.go("start");
  }
])


