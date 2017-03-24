import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
  }
}
});
