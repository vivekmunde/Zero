import isNull from '../../duxact/is-null';

describe('isNull()', () => {
    test('Should return true for null', () => {
        expect(isNull(null)).toBe(true);
    });

    test('Should return false for undefined', () => {
        expect(isNull()).toBe(false);
    });

    test('Should return false for some value', () => {
        expect(isNull('')).toBe(false);
        expect(isNull({})).toBe(false);
        expect(isNull([])).toBe(false);
    });
});