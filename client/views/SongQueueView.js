// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  className: "song-queue",
  tagName : "table",

  initialize: function() {
    //on click add the song to our queue
    this.render();
    this.collection.on('add', function(){
      this.render();
    }, this);
    this.collection.on('remove', function(){
      this.render();
    }, this);
  },

  render: function() {
    console.log(this.collection);
    this.$el.children().detach();
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render()
      })
    // return this.$el;
    );
  }

});
