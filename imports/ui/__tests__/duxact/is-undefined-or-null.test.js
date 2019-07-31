import isUndefinedOrNull from '../../duxact/is-undefined-or-null';

describe('isUndefinedOrNull()', () => {
    test('Should return true for undefined', () => {
        expect(isUndefinedOrNull()).toBe(true);
    });

    test('Should return true for null', () => {
        expect(isUndefinedOrNull(null)).toBe(true);
    });

    test('Should return false for some value', () => {
        expect(isUndefinedOrNull('')).toBe(false);
        expect(isUndefinedOrNull({})).toBe(false);
        expect(isUndefinedOrNull([])).toBe(false);
    });
});