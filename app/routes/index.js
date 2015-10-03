import Ember from 'ember';

var questions = [{
  id:1,
  question:"Is organic foods better than inorganic.",
  author:"Mala",
  notes:"organic food is expensive."

}, {
  id:2,
  question:"which season is good for growing basil. ",
  author:"Sally",
  notes:"I Love Basil."
}
];

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
  }

});
