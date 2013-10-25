var Pool = require('../lib/pool'),
    expect = require('chai').expect;

describe('Pool', function() {
  it('is instantiable', function() {
    expect(new Pool(process.cwd() + '/test/worker/temp.js')).to.not.equal(null);
  });

  describe('children', function() {
    it('can send messages to the parent', function(done) {
      var pool = new Pool(process.cwd() + '/test/worker/temp.js');

      pool.push('ping', function(error, message) {
        expect(message.stdout).to.equal('pong');
        done();
      });
    });
  });

});
