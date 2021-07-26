import { describe } from 'mocha';
import { expect } from 'chai';
import { getNumbers, getLabel } from '../server.js';

const data = [
    1,
    2,
    "Big",
    4,
    "Bang",
    "Big",
    "Theory",
    8,
    "Big",
    "Bang",
    11,
    "Big",
    13,
    "Theory",
    "BigBang",
    16,
    17,
    "Big",
    19,
    "Bang",
    "BigTheory",
    22,
    23,
    "Big",
    "Bang",
    26,
    "Big",
    "Theory",
    29,
    "BigBang",
    31,
    32,
    "Big",
    34,
    "BangTheory",
    "Big",
    37,
    38,
    "Big",
    "Bang",
    41,
    "BigTheory",
    43,
    44,
    "BigBang",
    46,
    47,
    "Big",
    "Theory",
    "Bang",
    "Big",
    52,
    53,
    "Big",
    "Bang",
    "Theory",
    "Big",
    58,
    59,
    "BigBang",
    61,
    62,
    "BigTheory",
    64,
    "Bang",
    "Big",
    67,
    68,
    "Big",
    "BangTheory",
    71,
    "Big",
    73,
    74,
    "BigBang",
    76,
    "Theory",
    "Big",
    79,
    "Bang",
    "Big",
    82,
    83,
    "BigTheory",
    "Bang",
    86,
    "Big",
    88,
    89,
    "BigBang",
    "Theory",
    92,
    "Big",
    94,
    "Bang",
    "Big",
    97,
    "Theory",
    "Big",
    "Bang",
    101,
    "Big",
    103,
    104,
    "BigBangTheory"
];

describe('server', () => {
  describe('getNumbers', () => {
    it('should return an empty array', () => {
      expect(getNumbers(0)).to.be.deep.equal([]);
    });

    it('should return an array with data', () => {
      expect(getNumbers(105)).to.be.deep.equal(data);
    });
  });

  describe('getLabel', () => {
    it('should return a number', () => {
      const numberMock = 2;
      expect(getLabel(numberMock)).to.be.a('number');
    });

    it('should return a string', () => {
      const numberMock = 3;
      expect(getLabel(numberMock)).to.be.a('string');
    });
  });
});
