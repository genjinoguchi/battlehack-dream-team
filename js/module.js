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
	}
}
