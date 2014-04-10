define(['text!templates/routine.html'], function(routineTemplate){
	var routineView = Backbone.View.extend({
		el: $('#content'),
		render: function(){
			this.$el.html(routineTemplate);
		}
	});
	return routineView;
});