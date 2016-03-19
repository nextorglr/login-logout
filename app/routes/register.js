import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		registerUser() {
			var ref = new Firebase(env.firebase);
			ref.createUser({
				email    : "bobtony@firebase.com",
				password : "correcthorsebatterystaple"
			}, function(error, userData) {
				if (error) {
					console.log("Error creating user:", error);
				} else {
					console.log("Successfully created user account with uid:", userData.uid);
				}
			});
		}
	}
});
