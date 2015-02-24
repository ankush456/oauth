'use strict';

/**
 * @ngdoc function
 * @name newFolderApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the newFolderApp
 */
angular.module('newFolderApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
