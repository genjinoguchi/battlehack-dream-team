app.controller("reviewController", function($scope, $firebase, $routeParams, $http){
	var rootRef = new Firebase("https://intense-fire-7167.firebaseio.com/restaurants/");
	var orders = rootRef.child("-JTzTkaviRMl4PLRSFpB/orders");
	
	var sync = $firebase(orders);
	$scope.orders = sync.$asArray();

	$scope.displayOrderFoods = function(foods) {
		var orderString = "";
		for (var food in foods) {
			orderString += food + " - " + foods[food] + "   ";
		}
		return orderString;
	}

	$scope.orderdone = function(order, orders, phonenumber) {
		orders.$remove(order);
		$http.post("/sendtext",phonenumber)
		.success(function(data) {console.log(data);})
		.error(function(data {console.log(data)}))

	}
	
})

//orders.$remove(order)