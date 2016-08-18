Router.configure({
	layoutTemplate: 'form_layout'
});

Router.map(function(){
	//login form
	this.route('login', {
		path: '/',
		template: 'login'
	});
	//register
	this.route('register', {
		path: '/register',
		template: 'register'
	});
	this.route('dashboard', {
		layoutTemplate: 'dashboard_layout',
		path: '/dashboard',
		onBeforeAction: function(){
			if(!Meteor.user()){
				Router.go("/")
			}
			this.next();
		} 

	})
});