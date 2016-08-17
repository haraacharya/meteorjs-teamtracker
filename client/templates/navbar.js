Template.navbar.events({
	"click .logout-btn": function(event){
		Meteor.logout();
		Router.go("/")
		//prevent form submission
		return false;
	}
});