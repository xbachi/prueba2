'use strict';

/**
 * @ngdoc function
 * @name angularProApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProApp
 */
angular.module('angularProApp')
  .controller('MainCtrl', function ($scope) {
     $scope.todos = ['ele1','ele2','ele3','ele4'];
     $scope.prueba = "as";

     $scope.addTodo = function(){
     	 $scope.todos.push($scope.agregarTodo);
     	 $scope.agregarTodo = "";
     };

     $scope.removeTodo = function(index){
     	 $scope.todos.splice(index,1);
     };

  });
