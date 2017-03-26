import Ember from 'ember';



var triviaGetter = function(){

  var artists = ['Cher','Chicago','Boston','Abba','Prince', 'Metallica', 'Eagles', 'Rihanna', 'AC/DC', 'Eminem', 'Aerosmith', 'U2', 'Adele', 'Santana', 'Coldplay', 'R.E.M'];
  var trivia = [];
  for (var i = 0, len = artists.length; i < len; i++) {
      Ember.$.getJSON("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+ artists[i]+"&api_key=8dc2d4f18f375fe36dd7b63b96a2e243&format=json")
    .then(function (result) {
    var artist = result.artist.name;
    // NOTE this separates the link from the rest of the bio.
    var bioArrWithLink = result.artist.bio.summary.split('<a');
    var bioArr = bioArrWithLink[0].split(' ');
    var artistLink = 'href="https://www.last.fm/music/' + artist + '">';
    // NOTE replaces the artist name with blank space
    for (var j = 0; j < bioArr.length; j++) {
      if (bioArr[j]===artist) {
        bioArr[j] = "______";
      }
    };
    var bioWithBlanks = bioArr.join(' ');
        trivia.push({
          author: "lastFM",
          title: result.artist.tags.tag[0].name + ", " + result.artist.tags.tag[1].name + ", " + result.artist.tags.tag[2].name,
          body: bioWithBlanks
        });
    });
  };

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
