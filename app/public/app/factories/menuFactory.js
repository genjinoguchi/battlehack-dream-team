app.factory("menuFactory", function($firebase) {
	var factory = {};

	factory.getRestaurants = function(){
		return $firebase(restaurantList).$asArray();
	}


	return factory;

})