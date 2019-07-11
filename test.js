'use strict';
var expect = require('chai').expect;
var hexToRgba = require('./script.js');

describe('Hex to RGBA convert Tests', function() {
  it('#FFF - 0.3(string) - rgba(255, 255, 255, .3)', function() {
    var rgba = hexToRgba('#FFF','0.3');
    expect(rgba).to.equal('rgba(255, 255, 255, 0.3)');
  });

  it('#FFFFFF - 1 (integer) - rgba(255, 255, 255, 1)', function() {
    var rgba = hexToRgba('#FFFFFF', 1);
    expect(rgba).to.equal('rgba(255, 255, 255, 1)');
  });

  it('FFF - .5 (string) - rgba(255, 255, 255, .5)', function() {
    var rgba = hexToRgba('#FFF','.5');
    expect(rgba).to.equal('rgba(255, 255, 255, .5)');
  });

  it('FFFFFF - 1 (integer) - rgba(255, 255, 255, 1)', function() {
    var rgba = hexToRgba('#FFFFFF',1);
    expect(rgba).to.equal('rgba(255, 255, 255, 1)');
  });

  it('FFFFF - 1 (integer) - throws Error ', function() {
    var rgba = hexToRgba('FFFFFF',1);
    expect(rgba).to.equal('throws Error');
  })
});