const chai = require('chai');
const expect = chai.expect;
const greet = require(__dirname + '/../lib/greeting');

describe('the greeting', () => {
  it('needs greet the person by name given in the CLI', () => {
    process.argv[2] = 'Shelly';
    expect(greet.greet()).to.equal('hello Shelly');
  });

  it('needs greet the person by the name hardcoded', () => {
    process.argv[2] = null;
    expect(greet.greet()).to.equal('hello bob');
  });
});
