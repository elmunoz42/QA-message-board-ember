import Ember from 'ember';

export default Ember.Route.extend({

//   model(params) {
//   return Ember.RSVP.hash({
//     question: this.store.findRecord('question', params.question_id),
//     answers: this.store.findAll('answer')
//   });
// },
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    update(question, params) {
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            question.set(key,params[key]);
          }
        });
        question.save();
        this.transitionTo('index');
      },
      saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', question);
    }
  }
});
