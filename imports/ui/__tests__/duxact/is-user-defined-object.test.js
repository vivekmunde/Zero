import isObject from '../../duxact/is-user-defined-object';

describe('isUserDefinedObject()', () => {
    test('Should return true for user defined object', () => {
        expect(isObject({})).toBe(true);
        expect(isObject({ some: 'value' })).toBe(true);
    });

    test('Should return false for function', () => {
        expect(isObject(() => { })).toBe(false);
    });

    test('Should return false for undefined', () => {
        expect(isObject(undefined)).toBe(false);
    });

    test('Should return false for null', () => {
        expect(isObject(null)).toBe(false);
    });

    test('Should return false for Array', () => {
        expect(isObject(['array'])).toBe(false);
    });

    test('Should return false for string', () => {
        expect(isObject('string')).toBe(false);
    });

    test('Should return false for number', () => {
        expect(isObject(0)).toBe(false);
    });
});