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
    return questions;
  }

});
