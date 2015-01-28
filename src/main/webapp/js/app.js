'use strict';

angular.module('todoApp', [
	'ngRoute',
    'todoApp.services',
    'todoApp.controllers'
]).config(function($routeProvider) {
	  $routeProvider.when('/', {templateUrl: 'partial/list.html', controller: 'TodoListCtrl'});
	  $routeProvider.when('/todoDetail/:todoId', {templateUrl: 'partial/detail.html', controller: 'TodoDetailCtrl'});
	  $routeProvider.when('/todoUpdate/:todoId', {templateUrl: 'partial/update.html', controller: 'TodoUpdateCtrl'});
	  $routeProvider.otherwise({redirectTo: '/'});
	});
