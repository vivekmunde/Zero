import isUndefined from '../../duxact/is-undefined';

describe('isUndefined()', () => {
    test('Should return true for undefined', () => {
        expect(isUndefined()).toBe(true);
    });

    test('Should return false for null', () => {
        expect(isUndefined(null)).toBe(false);
    });

    test('Should return false for some value', () => {
        expect(isUndefined('')).toBe(false);
        expect(isUndefined({})).toBe(false);
        expect(isUndefined([])).toBe(false);
    });
});