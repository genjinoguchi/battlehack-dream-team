var venmo = {
	user: patosai,
	send: function(amount) {
		window.open("https://venmo.com/" + venmo.user + "?txn=charge&amount=" + amount);
	},
}
