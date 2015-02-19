// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td class="song">(<%= artist %>)</td><td class="song"><%= title %></td><td><i class="fa fa-plus queue-btn"></i></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
      console.log(this.collection);
    },
    'ended': function() {
      this.model.dequeue();
      console.log("DEQUEUED!");
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
