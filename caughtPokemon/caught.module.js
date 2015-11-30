(function () {
  "use strict";

  angular
    .module('caught', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/caught', {
          templateUrl: 'caughtPokemon/views/list.html',
          controller: 'CaughtController'
        })
        .when('/caught/:_id', {
          templateUrl: 'caughtPokemon/views/detail.html',
          controller: 'CaughtController'
        });

    });



})();
