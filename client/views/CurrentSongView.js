var CurrentSongView = Backbone.View.extend({
	className: 'current-song', 

	template: _.template('<h1 class="song-name">(%= title %)</h1><h2 class="artist-name"><%= artist %></h2>'),

	render: function(){
		return this.$el.html(this.template(this.mode.attributes));

		console.log(artist);
	}
});