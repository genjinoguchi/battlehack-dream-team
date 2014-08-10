app.controller("reviewController", function($scope, $firebase, $routeParams, $http){
	var rootRef = new Firebase("https://intense-fire-7167.firebaseio.com/restaurants/");
	var orders = rootRef.child($routeParams.id+"/orders");
	
	var sync = $firebase(orders);
	$scope.orders = sync.$asArray();

	$scope.displayOrderFoods = function(foods) {
		var orderString = "";
		for (var food in foods) {
			orderString += food + " - " + foods[food] + "   ";
		}
		return orderString;
	}

	$scope.orderdone = function(order, orders) {
		orders.$remove(order);
		var data = 
		{
			"name": order.customerName,
			"phoneNumber": order.phoneNumber

		}
		$http.post("/sendtext",data);

	}
	
})

//orders.$remove(order)