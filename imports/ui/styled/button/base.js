import styled from 'styled-components';
import { size } from './constants';
import { padding } from './constants';

const { vertical: verticalPadding, horizontal: horizontalPadding } = padding;

const StyledButtonBase = styled.button`${({ theme, styled = {} }) => `
        cursor          : pointer;
        font-size       : ${styled.size ? size[styled.size] || styled.size : '0.8em'};
        border          : 1px solid ${theme.section.bgColor};
        padding         : ${verticalPadding} ${horizontalPadding};
        border-radius   : ${theme.border.radius};
        box-shadow      : ${theme.base.boxShadow};;
    `}}`;

export default StyledButtonBase;