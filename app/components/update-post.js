import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        imageURL: this.get('imageURL') ? this.get('imageURL') : "",
        title: this.get('title') ? this.get('title') : "",
        artist: this.get('artist') ? this.get('artist') : "",
        description: this.get('description') ? this.get('description') : "",
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
