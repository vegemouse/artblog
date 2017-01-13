import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  imageURL: DS.attr(),
  title: DS.attr(),
  artist: DS.attr(),
  description: DS.attr(),
  comments: DS.hasMany('comment', { async: true })
});
