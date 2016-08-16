Template.register.events({
	"submit .form-signup": function(event){
		var email = event.target.email.value;
		var password = event.target.password.value;
		var password2 = event.target.password2.value;
		var first_name = event.target.first_name.value;
		var last_name = event.target.last_name.value;
		var ust_id = event.target.ust_id.value;
		var intel_id = event.target.intel_id.value;

		Accounts.createUser({
			email: email,
			password: password,
			profile: {
				first_name: first_name,
				last_name: last_name,
				ust_id: ust_id,
				intel_id: intel_id
			}

		}, function(err){
			if(err){
				FlashMessages.sendError('There was an error in registration');
			} else{
				FlashMessages.sendSuccess('Account has been created successfully');	
				Router.go('/dashboard');	
			}
		});

		return false;

	}
});