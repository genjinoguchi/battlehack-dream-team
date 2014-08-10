function mainController($scope, $http) {
	$scope.getFromJson = function() {
		$http({method: 'POST', url: 'restaurants/sample.json'})
			.success(function (data) {
				$scope.dataFromJson = data; // response data
			});
	}
	$scope.subtotal = 0.00;
}
