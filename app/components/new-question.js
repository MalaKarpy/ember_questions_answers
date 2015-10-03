import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
  saveQuestion() {
    //debugger;
    var params = {
      askQuestion: this.get('askQuestion'),
      author: this.get('author'),
      notes: this.get('notes'),
      //post: this.get('post') ? this.get('post'),
    };
    this.set('addNewQuestion', false);
    this.sendAction('saveQuestion', params);
    }
  }
});
