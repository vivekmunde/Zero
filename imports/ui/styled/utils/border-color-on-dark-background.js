import { lighten } from 'polished';

const borderColorOnDarkBackground = ({ color } = {}) => lighten('0.15', color);

export default borderColorOnDarkBackground;