'use strict';

/**
 * @ngdoc function
 * @name newFolderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newFolderApp
 */
angular.module('newFolderApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
