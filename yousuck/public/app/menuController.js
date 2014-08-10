app.controller("menuController", function($scope, $firebase){
	var rootRef = new Firebase("https://intense-fire-7167.firebaseio.com/");
	var samplechat = rootRef.child("samplechat/");

	$scope.messages = $firebase(samplechat).$asArray();

})