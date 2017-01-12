import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    savePost() {
      var params = {
        author: this.get('author') ? this.get('author') : "anonymous",
        imageURL: this.get('imageURL') ? this.get('imageURL') : "http://i.stack.imgur.com/yZlqh.png",
        title: this.get('title') ? this.get('title') : "Untitled",
        artist: this.get('artist') ? this.get('artist') : "(No artist found)",
        description: this.get('description') ? this.get('description') : "No description",
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
