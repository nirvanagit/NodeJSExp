define(['router'], function(router){				
	var initialize = function(){
		Backbone.history.start(); //This sentence is the most important here. Without this the router would not load the views.
		//checkLogin(runApplication);
	};

	/*var checkLogin = function(callback){
		callback(true);
	};

	var runApplication = function(authenticated){
		if(authenticated){
			console.log('Todo');
			//window.location.hash = 'index';
			//window.location.hash = 'routines';
		}
		Backbone.history.start();
	};*/

return {
	initialize: initialize
};
});


/*define(['views/index', 'views/routines'], function(indexView, routineView){
	var initialize = function(){
		indexView.render();
		routineView.render();
	}

	return {
		initialize: initialize
	};
});*/

