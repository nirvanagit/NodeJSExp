define(['views/index','views/routines','views/circuitTraining'],

	function(IndexView, RoutineView, CircuitTrainingView){
		var SimpleAppRouter = Backbone.Router.extend({
			currentView: null,

			routes: {
				'index':'index',
				'routines':'routines',
				'circuitTraining': 'circuitTraining'
			},
			changeView: function(view){
				if( null != this.currentView ){
					this.currentView.undelegateEvents();
				}
				this.currentView = view;
				this.currentView.render();
			},

			index: function(){
				this.changeView(new IndexView());
			},

			routines: function(){
				this.changeView(new RoutineView());
			},

			circuitTraining: function(){
				this.changeView(new CircuitTrainingView());
			}		
		});
		return new SimpleAppRouter();
	});