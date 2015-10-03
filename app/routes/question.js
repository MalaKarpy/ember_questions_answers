import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveQuestion(params) {
      //debugger;
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      newAnswer.save().then(function() {
        question.get('answers').addObject(newAnswer);
        question.save();
        this.transitionTo('question', params.question);
      }).catch(function(thingy) {
        console.log(thingy.errors);
      });
    },

  // deleteQuestion(post) {
  //   var post_deletions = post.get('comments').map(function(comment) {
  //     return comment.destroyRecord();
  //   });
  //   Ember.RSVP.all(post_deletions)
  //     .then(function() {
  //       return post.destroyRecord();
  //     })
  //
  //   this.transitionTo('index');
  // }
}
});
