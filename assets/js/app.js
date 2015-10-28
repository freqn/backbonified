'use strict';

var app = {}; // create namespace for our app

app.Todo = Backbone.Model.extend({
 defaults: {
	 title: '',
	 completed: false
 }
});




// var AppView = Backbone.View.extend({
// 	el: $('#container'),
// 	template: _.template('<h3>Wowzers, <%= who %> <h3>'),
// 	initialize: function(){
// 		this.render();
// 	},
// 	render: function(){
// 		this.$el.html(this.template({who: "Look Mah.. I can backbone!!!!"}));
// 	}
// });
// var appView = new AppView();
