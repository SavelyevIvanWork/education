import objectsSearch from './index';

describe('array-of-objects', () => {
  test('should exist', () => {
    expect(typeof objectsSearch).toBe('function');
  });
  describe('should correct work', () => {
    test('objectsSearch([{name: Stalin, reign: 30}, {name: Khrushchev, reign: 11}, {name: Brezhnev, reign: 13}, {name: Andropov, reign: 2}, {name: Chernenko, reign: 1}, {name: Gorbachev, reign: 6}], 13) => [{name: Brezhnev, reign: 13}, {name: Alexander Third, reign: 13}]', () => {
      expect(objectsSearch([
        {name: 'Stalin', reign: 30},
        {name: 'Khrushchev', reign: 11},
        {name: 'Brezhnev', reign: 13},
        {name: 'Andropov', reign: 2},
        {name: 'Chernenko', reign: 1},
        {name: 'Alexander Third', reign: 13}
      ], 13)).toEqual([{name: 'Brezhnev', reign: 13}, {name: 'Alexander Third', reign: 13}]);
    });
  });
});
