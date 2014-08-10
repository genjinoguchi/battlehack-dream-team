app.controller("restaurantController", function($scope, $firebase){
	var rootRef = new Firebase("https://intense-fire-7167.firebaseio.com/")
	var restaurants = rootRef.child("restaurants");
	var sync = $firebase(restaurants);

	$scope.restaurants = sync.$asArray();
})