import { getConstant, indexToLevel, levelToIndex } from '../level-constants';

describe('level-constant module', () => {
  it.each([
    {
      index: 0,
      expectedLevel: 1,
    },
    {
      index: 1,
      expectedLevel: 1.5,
    },
    {
      index: 18,
      expectedLevel: 10,
    },
    {
      index: 78,
      expectedLevel: 40,
    },
  ])(
    'should convert index $index to level $expectedLevel',
    ({ index, expectedLevel }) => {
      expect(indexToLevel({ index })).toEqual(expectedLevel);
    },
  );

  it.each([
    {
      level: 1,
      expectedIndex: 0,
    },
    {
      level: 1.5,
      expectedIndex: 1,
    },
    {
      level: 10,
      expectedIndex: 18,
    },
    {
      level: 40,
      expectedIndex: 78,
    },
  ])(
    'should convert level $level to index $expectedIndex',
    ({ level, expectedIndex }) => {
      expect(levelToIndex({ level })).toEqual(expectedIndex);
    },
  );

  it.each([
    {
      level: 1,
      expectedConstant: 0.0939999968,
    },
    {
      level: 5.5,
      expectedConstant: 0.3060573814,
    },
    {
      level: 20,
      expectedConstant: 0.5974000096,
    },
    {
      level: 40,
      expectedConstant: 0.790300011634827,
    },
  ])(
    'should return constant for level $level',
    ({ level, expectedConstant }) => {
      expect(getConstant({ level })).toEqual(expectedConstant);
    },
  );

  it.each([0.5, 55.5, 56])(
    'should throw error for get constant out of range (level %f)',
    level => {
      expect(() => {
        getConstant({ level });
      }).toThrow('No constant for provided level.');
    },
  );
});
