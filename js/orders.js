function mainController($scope, $http) {
	$scope.getFromJson = function(url) {
		$http({method: 'POST', url: url})
			.success(function (data) {
				$scope.dataFromJson = data; // response data
			});
	}
	$scope.showOrders = function(data) {
		var orderString = "";
		for (var key in data) {
			orderString += key + ": " + data[key] + "\n";
		}
		return orderString;
	}
	$scope.removeOrder = function() {
		this.parentElement.removeChild(this);
	}
}
