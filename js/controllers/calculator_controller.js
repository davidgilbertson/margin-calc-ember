'use strict';

MCApp.CalculatorController = Ember.ObjectController.extend({
  cog: '$100',
  cos: '$10',
  slp: '$200',
  
  //Total Cost
  tot: function(key, val) {
    var cog = parseFloat(MCUtils.stripSymbols(this.get('cog')), 10);
    var cos = parseFloat(MCUtils.stripSymbols(this.get('cos')), 10);
    if (!val) {
      return MCUtils.addSymbol(cos + cog, '$');
    } else {
      val = parseFloat(MCUtils.stripSymbols(val), 10);
      var newCos = MCUtils.addSymbol(val - cog, '$');
      this.set('cos', newCos);
      return val;
    }
  }.property('cog', 'cos'),
  
  //Margin $
  mgd: function(key, val) {
    var tot = parseFloat(MCUtils.stripSymbols(this.get('tot')), 10);
    var slp = parseFloat(MCUtils.stripSymbols(this.get('slp')), 10);
    if (!val) {
      return MCUtils.addSymbol(slp - tot, '$');
    } else {
      val = parseFloat(MCUtils.stripSymbols(val), 10);
      var newSlp = MCUtils.addSymbol(tot + val, '$');
      this.set('slp', newSlp);
      return val;
    }
  }.property('tot', 'slp'),
  
  //Margin %
  mgp: function(key, val) {
    var tot = parseFloat(MCUtils.stripSymbols(this.get('tot')), 10);
    var mgd = parseFloat(MCUtils.stripSymbols(this.get('mgd')), 10);
    var slp = parseFloat(MCUtils.stripSymbols(this.get('slp')), 10);
    if (!val) {
      return MCUtils.addSymbol(mgd / slp, '%');
    } else {
      val = parseFloat(MCUtils.stripSymbols(val), 10);
      var newSlp = MCUtils.addSymbol(tot / (1 - val), '$');
      this.set('slp', newSlp);
      return val;
    }
  }.property('tot', 'slp'),
  
  //Markup %
  mkp: function(key, val) {
    if (!val) {
      var mgd = parseFloat(MCUtils.stripSymbols(this.get('mgd')), 10);
      var tot = parseFloat(MCUtils.stripSymbols(this.get('tot')), 10);
      return MCUtils.addSymbol(mgd / tot, '%');
    } else {
      val = parseFloat(MCUtils.stripSymbols(val), 10);
      //TODO
      return val;
    }
  }.property('tot', 'slp'),
  
  updateCalculdatedFields: function() {
    console.log('one of the things changed');
  }.observes('cog', 'cos', 'slp'),
  
  spill: function() {
    console.log('here is my guts');
  }
});

