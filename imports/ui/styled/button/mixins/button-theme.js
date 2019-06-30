import { css } from 'styled-components';
import { lighten, darken } from 'polished';

const buttonTheme = css`${
    ({ theme, styled = {} }) => {
        const bgColor = styled.bgColor || theme.section.bgColor;
        const borderColor = styled.borderColor || styled.bgColor || theme.section.bgColor;
        const color = styled.color || theme.font.color;
        return `
            background-color: ${bgColor};
            background      : linear-gradient(${lighten(0.02, bgColor)}, ${darken(0.02, bgColor)});
            border-color    : ${borderColor};
            color           : ${color};
        
            &:hover,
            &:active,
            &:focus {
                background-color: ${darken(0.05, bgColor)};
                background      : linear-gradient(${bgColor}, ${darken(0.04, bgColor)});
                outline-color   : ${lighten(0.1, bgColor)};
            }
        `;
    }}`;

export default buttonTheme;