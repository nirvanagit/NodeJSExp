define(['text!templates/circuitTraining.html'], function(circuitTrainingTemplate){
	var circuitTrainingView = Backbone.View.extend({
		el: $('#content'),
		render: function(){
			this.$el.html(circuitTrainingTemplate);
		}
	});
	return circuitTrainingView;
});