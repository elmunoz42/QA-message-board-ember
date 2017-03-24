# QA-message-board

Ember App that allows users to post questions and/or respective answers using Firebase Database.

## Objectives and Strategies

|Objective |Strategy |
|:---------|:--------|
|1)Application template contains header with link(s).|Application template automatically generated. Style it. Add link back to homepage.|
|2)Data is stored in and retrieved from Ember Data models and Firebase.|Create models first then database. Make sure to create one to many relationship where one question can have many answers.|
|3)Components are used to create the display and behavior for your templates.|Create index page and use #each loop to display components for questions.|
|4)One-to-many relationship exists between Question and Answers.|This is already set up in the model now create a #each loop in the dynamic template for a given question to display all the answers.|
|5)Styling | CSS .jumbotron can be used for the questions and .well for the answers. Find an abstract background and give the wells some translucency using rgba hexcode.|

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
