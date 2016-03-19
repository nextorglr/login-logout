import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  email: '',
	password: '',
  regSuccess: false,
  regResponse: false,

	actions: {
		registerUser() {
      this.set('regResponse', false);
			let ref = new Firebase(config.firebase);
      let _self = this;
			ref.createUser({
				email    : this.get('email'),
				password : this.get('password')
			}, function(error, userData) {
				if (error) {
					_self.set('regSuccess', false);
				} else {
					_self.set('regSuccess', true);
				}
        _self.set('regResponse', true);
			});
		}
	}
});
