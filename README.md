# QA-message-board

Ember App that allows users to post music trivia questions and/or respective answers using Firebase Database.

## Planning

|Objective |Strategy |
|:---------|:--------|
|1)Application template contains header with link(s). Include a header and/or navbar that appears on all pages containing the name of your site and a link to the home page.|Application template automatically generated. Style it. Add link back to homepage.|
|2a)Data is stored in and retrieved from Ember Data models and Firebase.|Create models first then JSON files to upload to the database and then integrate database. Make sure to create one to many relationship where one question can have many answers.|
|2b)Questions should have the content of the question itself, an author and additional notes.|Add keys to respective models.|
|2c)Answers should have the content of the answer and the author.|Add keys to respective models.|
|3a)omponents are used to create the display and behavior for your templates. List all questions on the homepage, with only the question and the name of the author showing.|Create index page and use #each loop to display components for questions.|
|3b)Add component for creating new question.|Use show and hide with button and form.|
|3c)Users can click on a question, and be routed to another page containing additional information.Allow users to edit questions.|Create dynamic page for question add update actions on the dynamic page.|
|3d)Allow users to add answers to a question. Answers should be added and viewed on the same page as the question they respond to.|Add a create answer component on the question dynamic page that saves the relationship and the answer on the database.|
|3e)Users can delete question. | Create delete-question components and functionality.|
|4)Styling | CSS .jumbotron can be used for the questions and .well for the answers. Find an abstract background and give the wells some translucency using rgba hexcode.|
|5)Add more info to about page.| Get picture and bio from CMK-porfolio.|

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd qa-message-board`
* `npm install`
* `bower install`
* `ember install emberfire`
* `ember install ember-bootstrap`
* [create a firebase account and link it to this project](https://www.learnhowtoprogram.com/javascript/ember-js/ember-data-and-firebase)

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
