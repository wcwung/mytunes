// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
    // console.log('enqueue triggered');
  },

  dequeue: function() {
    this.trigger('dequeue', this);
    // console.log("dequeue triggered");
  },

  ended: function() {
    this.trigger('dequeue', this);
    this.trigger('ended', this);
  }

});
