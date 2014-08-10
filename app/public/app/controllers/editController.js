app.controller("editController", function($scope, $firebase, $routeParams){
	var rootRef = new Firebase("https://intense-fire-7167.firebaseio.com/restaurants/");
	var foods = rootRef.child("-JTzTkaviRMl4PLRSFpB/foods");
	
	var sync = $firebase(foods);
	$scope.menu = sync.$asArray();


	
})