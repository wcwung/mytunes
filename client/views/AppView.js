// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({
  className: 'content-container',

  initialize: function(params){

    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.currentSongView = new CurrentSongView({model: this.model.get('currentSong')});
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    // this.model.on('change:library', function(model){
    //   this.playerView.setSong(model.get('currentSong'));
    // });
  },
  render: function(){
    return this.$el.html([
      this.currentSongView.$el,
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
