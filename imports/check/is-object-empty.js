import isUndefined from './is-undefined';
import isNull from './is-null';

export default (val) => (isUndefined(val)
    || isNull(val)
    || (Object.keys(val).length === 0 && val.constructor === Object));