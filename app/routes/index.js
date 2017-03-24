import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
    answers: this.store.findAll('answer'),
    questions: this.store.findAll('question')
  });
},
});
