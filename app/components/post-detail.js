import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyPost', post);
      }
    },
    destroyComment(comment) {
      this.sendAction('destroyComment', comment);
    },
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!=="") {
          post.set(key,params[key]);
        }
      });
      post.save();
    },
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
    },
  }
});
