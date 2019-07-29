import arrayToMapStateToProps from '../../duxact/array-to-map-state-to-props';

describe('arrayToMapStateToProps()', () => {
    test('Should convert array to mapStateToProps', () => {
        const mapStateToProps = arrayToMapStateToProps(['one', 'two']);
        expect(mapStateToProps({ one: '1', two: '2', three: '3' })).toEqual({ one: '1', two: '2' });
    });
});