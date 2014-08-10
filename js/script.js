var venmo = {
	user: patosai,
	send: function(amount) {
		window.open("https://venmo.com/" + venmo.user + "?txn=charge&amount=" + amount);
	},
}

function getJsonData($scope, $http) {
	$http({method: 'POST', url: 'restaurants/sample.json'}).success(function (data) {
		$scope.dataFromJson = data; // response data
	});
