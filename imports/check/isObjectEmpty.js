import isUndefined from './isUndefined';
import isNull from './isNull';

export default (val) => (isUndefined(val)
    || isNull(val)
    || (Object.keys(val).length === 0 && val.constructor === Object));