var Pool = require('../lib/pool'),
    expect = require('chai').expect;

describe('Pool', function() {
  it('is instatiable', function() {
    expect(new Pool(process.cwd() + '/test/worker/temp.js')).to.not.equal(null);
  });

});
