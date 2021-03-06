app.controller("menuController", function($scope, $firebase, $routeParams, $http){
	var rootRef = new Firebase("https://intense-fire-7167.firebaseio.com/restaurants/");
	var restaurant = rootRef.child($routeParams.id+"/");
	var foods = restaurant.child("foods")
	var sync = $firebase(foods);
	$scope.menu = sync.$asArray();

	$scope.orders = $firebase(restaurant.child("/orders")).$asArray();

	$scope.getImagePath = function(item) {
		if (item.name === "Krabby Patty") {
			return "../../img/rsz_crabby2.jpg";
		}else if (item.name ==="Sea Salt Fries") {
			return "../../img/frie.jpg";
		} else return "../../img/rsz_green-smoothie.jpg"
	}

	/*
	var restaurant = $routeParams.restaurantName;
	var menuRef = rootRef.child("")
	console.log(restaurant);
	*/

	/*
	$scope.getFromJson = function(url) {
	$http({method: 'POST', url: url})
		.success(function (data) {
			$scope.dataFromJson = data; // response data
		});
	}*/
	$scope.subtotal = 0;
	$scope.calculateSubtotal = function() {
		$scope.subtotal = 0;
		var div = document.getElementsByClassName("input");
		for (var i = 0; i < div.length; i++) {
			$scope.subtotal += div[i].value * parseFloat(div[i].name);
		}
		return $scope.subtotal;
	}
	$scope.calculateAndPaySubtotal = function() {
		if(!$scope.phoneNumber || !$scope.customerName){
			alert("You're an idiot.");
		}else{
			var r = confirm($scope.customerName + ", please confirm your phone number: " + $scope.phoneNumber);
			if (r) {
				alert("Thank you for your order. You will receive a SMS message when your order is ready.");
				$scope.calculateSubtotal();
				venmo.send($scope.subtotal);
				$scope.addOrder();

				//Push the order onto firebase
				$scope.order.customerName = $scope.customerName;
				$scope.order.phoneNumber = $scope.phoneNumber;
				$scope.orders.$add($scope.order);
			}
		}


	}
	$scope.order = {};
	$scope.addOrder = function() {
		var div = document.getElementsByClassName("input");
		var element = {};
		for (var i = 0; i < div.length; i++) {
			if (div[i].value > 0) {
				var quantity = div[i].value;
				element[div[i].id] = quantity;
			}
		}
		$scope.order.foods=element;
		//TODO: please output $scope.orders to orders.json
	}
	var venmo = {
	user: "patosai",
	send: function(amount) {
		window.open("https://venmo.com/" + venmo.user + "?txn=pay&amount=" + amount);
	},
}

})
