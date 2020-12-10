import assert from 'assert';
import generateID from '../dist/generateid';

describe('generateID', function() {
  it('generates a unique ID', function() {
    assert.ok(generateID() != generateID());
  });
});
