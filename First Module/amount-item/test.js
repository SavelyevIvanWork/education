import arraySearch from './index';

describe('array-search', () => {
  describe('should correct work', () => {
    test('arraySearch([11, 57, 2, 110, 11, 94, 7], 11) => [11, 11]', () => {
      expect(arraySearch([11, 57, 2, 110, 11, 94, 7], 11)).toEqual([11, 11]);
    });
    test('arraySearch([Stalin, Khrushchev, Brezhnev, Andropov, Chernenko, Gorbachev], Stalin) => [Stalin]', () => {
      expect(arraySearch(['Stalin', 'Khrushchev', 'Brezhnev', 'Andropov', 'Chernenko', 'Gorbachev'], 'Stalin')).toEqual(['Stalin']);
    });
  });
});
