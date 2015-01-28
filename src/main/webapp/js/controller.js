'use strict';

angular.module("todoApp.controllers", [])
    .controller("TodoListCtrl", function($scope, Todo){
    	$scope.name = "Allen";
    	$scope.todos = Todo.query();
    	$scope.$on("updateTodos", function (event, todo) {
    		$scope.todos.push(todo);
        });
    	
    	 $scope.remove = function(idx){
             $scope.todos[idx].$remove(function(res){
                 $scope.todos.forEach(function(p, index) {
                     if (index == idx) $scope.todos.splice(index, 1);
                 });
             });
         };
    })
    .controller("TodoDetailCtrl", function($scope, $routeParams, Todo){
        $scope.todo = Todo.get({id: $routeParams.todoId});
    })
    .controller("TodoAddCtrl", function($rootScope, $scope, Todo){
    	$scope.name = "";
    	$scope.owner = "";
    	$scope.priority = "Low";
    	
    	$scope.add = function(){
    		var todo = new Todo();
    		todo.name = $scope.name;
    		todo.owner = $scope.owner;
    		todo.priority = $scope.priority;
    		todo.$save(function(){
    			$rootScope.$broadcast("updateTodos", todo);
    		});
    	};
    })
    .controller("TodoUpdateCtrl", function($scope, $routeParams, $location, Todo){
    	$scope.todo = Todo.get({id: $routeParams.todoId});
    	$scope.update = function(){
    		$scope.todo.$update(function(){
                $location.path("/todoDetail/"+$scope.todo.id);
            });
    	};
    });