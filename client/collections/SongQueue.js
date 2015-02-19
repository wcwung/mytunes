// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  enqueue: function(song){
    console.log(this);
  },
  initialize: function(){
    // this.on('change', function ())
    this.on('add', function(){
      if (this.length === 1) {
        this.playFirst();
      }
      console.log("add test", this);
    }, this);
    this.on('remove', function(){
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function(song){
      this.remove(song);
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  }

});
