'use strict';

var MCUtils = MCUtils || {};

MCUtils.round = function(num, dps) {
  var factor = Math.pow(10, dps);
  return Math.round(num * factor) / factor;
};

MCUtils.stripSymbols = function(data) {
  data = data.toString();
  if (/%$/.test(data)) {
    return parseFloat(data.replace(/[^\d\.]/g, ''), 10) / 100;
  } else {
    return parseFloat(data.replace(/[^\d\.]/g, ''), 10);
  }
}

MCUtils.addSymbol = function(data, symbol) {
  if (symbol === '%') {
    return MCUtils.round(data * 100, 2) + symbol;
  } else {
    return symbol + MCUtils.round(data, 2);
  }
}