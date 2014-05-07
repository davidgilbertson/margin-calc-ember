'use strict';

var MCApp = Ember.Application.create();

MCApp.Router.map(function() {
//   this.route('calculator');
  this.resource('calculator', {path: '/'});
});

// MCApp.CalculatorRoute = Ember.Route.extend({
//   setupController: function(controller) {
//     console.log('setting up controller');
//     controller.set('cog', "100");
//   }
// });


MCApp.CalculatorController = Ember.ObjectController.extend({
  cog: 100,
  cos: 10,
  slp: 200,
  tot: function(key, val) {
    if (!val) {
      console.log('getting');
      return parseFloat(this.get('cog'), 10) + parseFloat(this.get('cos'), 10);
    } else {
      var thisCog = parseFloat(this.get('cog'), 10);
      var newCos = val - thisCog;
      this.set('cos', newCos);
    }
  }.property('cog', 'cos'),
  
  updateCalculdatedFields: function() {
    console.log('one of the things changed');
  }.observes('cog', 'cos', 'slp'),
  
  spill: function() {
    console.log('here is my guts');
  }
});

// MCApp.Calculator = Ember.Object.extend({
// });
