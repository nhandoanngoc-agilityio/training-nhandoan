'use strict';

angular
  .module('app')
  .controller('MainCtrl',[
  	'$scope',
  	function ($scope) {

///////////////////////////////////////////////////////////////////////////////////////
	// TODO:: handle event errors
	$scope.$on('errorGlobal.handle', function (data) {
	});

///////////////////////////////////////////////////////////////////////////////////////
  	}
  ])