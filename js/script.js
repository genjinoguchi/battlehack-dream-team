var venmo = {
	user: "patosai",
	send: function(amount) {
		window.open("https://venmo.com/" + venmo.user + "?txn=charge&amount=" + amount);
	},
}

var restaurant = {
	foods: [],
	counter: 0,
	add_food:function() {
		var name = document.getElementById("add_food_name").value;
		var price = document.getElementById("add_food_price").value;
		var counter = restaurant.counter++;

		restaurant.foods.push(
			{"name": name, "price": price, "id" : counter}
		);

		var div = document.createElement("div");
		div.id = counter;
		div.innerHTML = name + "&nbsp;" + price;

		var removebutton = document.createElement("button");
		removebutton.value = "Remove"
		removebutton.className = counter;
		//removebutton.onclick = restaurant.remove_food(removebutton.className);
		removebutton.onclick = function() {
			for (var i = 0; i < restaurant.foods.length; i++) {
				if ("" + restaurant.foods[i].id === removebutton.className) {
					restaurant.foods.splice(i, 1);
					break;
				}
			}
			this.parentElement.parentElement.removeChild(this.parentElement);
		}
		div.appendChild(removebutton);

		document.getElementById("add_food_name").value = "";
		document.getElementById("add_food_price").value = "";

		document.getElementById("main_wrapper").appendChild(div);
	}
}
