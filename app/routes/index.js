import Ember from 'ember';


// These code snippets use an open-source library.
// str.replace
// questions: this.store.findAll('question')
// result.artist.bio.summary.replace(result.artist.name, "???")
// function(params) {
// var url = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=8dc2d4f18f375fe36dd7b63b96a2e243&format=json";
// return Ember.$.getJSON(url);

// model: function(params) {
//    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=[YOUR_API_KEY_HERE]&zip=' + params.zip;
//    return Ember.$.getJSON(url).then(function(responseJSON) {
//      return responseJSON.results;
//    });
//   }

var triviaGetter = function(){
  var trivia = []; Ember.$.getJSON("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=8dc2d4f18f375fe36dd7b63b96a2e243&format=json")
.then(function (result) {
  console.log(
    {
        author: "lastFM",
        title: "Who is ..." + result.artist.tags.tag[0].name + ", " + result.artist.tags.tag[1].name + ", " + result.artist.tags.tag[2].name,
        body: result.artist.bio.summary.replace(result.artist.name, "_____")
    }
    );
    trivia[0] = {
      author: "lastFM",
      title: "Who is ..." + result.artist.tags.tag[0].name + ", " + result.artist.tags.tag[1].name + ", " + result.artist.tags.tag[2].name,
      body: "test"
    };

});
  return trivia;
};


export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
    answers: this.store.findAll('answer'),
    questions: triviaGetter()
    // questions: this.store.findAll('question')
  });
},
actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
},
});
