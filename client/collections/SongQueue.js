// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  enqueue: function(song){
    console.log(this);
  },
  initialize: function(){
    this.render();
  },
  render: function() {

  }

});
