function mainController($scope, $http) {
	$scope.getFromJson = function(url) {
		$http({method: 'POST', url: url})
			.success(function (data) {
				$scope.dataFromJson = data; // response data
			});
	}
	$scope.IDcounter = 0;
	$scope.setID = function(element) {
		this.id = ++$scope.IDcounter;
	}
	$scope.showOrders = function(data) {
		var orderString = "";
		for (var key in data) {
			orderString += key + ": " + data[key] + "\n";
		}
		return orderString;
	}
	$scope.removeOrder = function(element) {
		element.parentElement.parentElement.removeChild(this.parentElement);
	}
}
