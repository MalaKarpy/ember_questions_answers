import DS from 'ember-data';

export default DS.Model.extend({
  answerFor:DS.attr(),
  question:DS.belongsTo('question', {async:true}),
  author:DS.attr(),


});
