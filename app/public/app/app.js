//Firebase config

/*
var rootRef = new Firebase('https://intense-fire-7167.firebaseio.com/');
var restaurantList = rootRef.child("restaurants/");

	$('#messageInput').keypress(function (e) {
    if (e.keyCode == 13) {
      	var name = $('#nameInput').val();
      	var text = $('#messageInput').val();
      	restaurantList.push({name: name, text: text});
      	$('#messageInput').val('');
    }
});

restaurantList.on('child_added', function(snapshot) {
	var message = snapshot.val();
	//displayChatMessage(message.name, message.text);
});

function displayChatMessage(name, text) {
	$('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
	$('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
};
*/

//Angular
var app = angular.module("mainmod",['ngRoute','firebase']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: "landingController",
                templateUrl: "app/partials/landing.html"
            })
        .when('/restaurants',
        	{
        		controller: 'restaurantController',
                templateUrl: 'app/partials/rest.html'
        	})
        .when('/restaurants/krustykrab',
            {
                controller: 'menuController',
                templateUrl: 'app/partials/menu.html'
            })
        .when('/restaurants/edit/krustykrab',
        	{
        		controller: 'editController',
                templateUrl: 'app/partials/menuedit.html'	
        	})
        .when('/restaurants/review/krustykrab',
            {
                controller: 'reviewController',
                templateUrl: 'app/partials/review.html'
            })
        
        .otherwise({ redirectTo: '/' });

});