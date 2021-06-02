import arrayIndex from './index';

describe('arrayIndex', () => {
  test('should exist', () => {
    expect(typeof arrayIndex).toBe('function');
  });
  describe('should correct work', () => {
    test('arrayIndex([11, 57, 2, 110, 11, 94, 7], 3) => [11, 57, 2]', () => {
      expect(arrayIndex([11, 57, 2, 110, 11, 94, 7], 3)).toEqual([0, 1, 2]);
    });
  });
});
