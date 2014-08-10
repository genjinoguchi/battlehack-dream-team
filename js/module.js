function mainController($scope, $http) {
	$scope.getFromJson = function(url) {
		$http({method: 'POST', url: url})
			.success(function (data) {
				$scope.dataFromJson = data; // response data
			});
	}
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
		$scope.calculateSubtotal();
		venmo.send($scope.subtotal);
		$scope.addOrder();
	}
	$scope.orders = [];
	$scope.addOrder = function() {
		var div = document.getElementsByClassName("input");
		var element = {};
		for (var i = 0; i < div.length; i++) {
			if (div[i].value > 0) {
				var food_type = div[i].id;
				var quantity = div[i].value;
				element.food_type = quantity;
			}
		}
		$scope.orders.push(element);
		//TODO: please output $scope.orders to orders.json
	}
}
