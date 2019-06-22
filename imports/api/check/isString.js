import isUndefined from './isUndefined';
import isNull from './isNull';

export default (val) => (!isUndefined(val)
    && !isNull(val)
    && typeof val === 'string');