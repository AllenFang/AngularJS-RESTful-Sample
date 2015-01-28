'use strict';

angular.module("todoApp.services", ["ngResource"])
    .factory("Todo", function($resource){
    	return $resource('rest/todos/:id', {id:'@id'}, {
    		update: {
                method: 'PUT'
              }
    	});
    });