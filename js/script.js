var venmo = {
	user: "patosai",
	send: function(amount) {
		window.open("https://venmo.com/" + venmo.user + "?txn=charge&amount=" + amount);
	},
}

var restaurant = {
	foods:[],
	add_food:function() {
		var name = document.getElementById("add_food_name").value;
		var price = document.getElementById("add_food_price").value;

		var div = document.createElement("div");
		div.id = "food";
		div.innerHTML = name + "   " + price;

		document.getElementById("add_food_name").value = "";
		document.getElementById("add_food_price").value = "";

		document.getElementById("main_wrapper").appendChild(div);

		restaurant.foods.push(
			{"name": name, "price": price}
		);
	}
}
