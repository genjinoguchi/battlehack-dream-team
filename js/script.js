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

		var div = document.createElement("div");
		div.id = restaurant.counter++;
		div.innerHTML = name + "&nbsp;" + price;

		var removebutton = document.createElement("button");
		removebutton.value = "Remove"
		removebutton.className = restaurant.counter;
		//removebutton.onclick = restaurant.remove_food(removebutton.className);
		removebutton.onclick = function() {
			this.parentElement.parentElement.removeChild(this.parentElement);
		}
		div.appendChild(removebutton);

		document.getElementById("add_food_name").value = "";
		document.getElementById("add_food_price").value = "";

		document.getElementById("main_wrapper").appendChild(div);

		restaurant.foods.push(
			{"name": name, "price": price}
		);
	}
}
