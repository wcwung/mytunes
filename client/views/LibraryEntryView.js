// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="song">(<%= artist %>)</td><td class="song"><%= title %></td><td><i class="fa fa-plus queue-btn"></i></td>'),

  events: {
    'click': function() {
      // this.model.play();
      this.model.enqueue(); //this.model.equeue() placed here to pass test spec.
      // console.log('hello from LEV click');
    },

    'click .queue-btn': function() {
      this.model.enqueue();
      // console.log('click queue-btn');
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
