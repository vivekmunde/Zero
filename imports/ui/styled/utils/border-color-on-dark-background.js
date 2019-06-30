import { lighten } from 'polished';

const borderColorOnDarkBackground = ({ color } = {}) => lighten('0.05', color);

export default borderColorOnDarkBackground;