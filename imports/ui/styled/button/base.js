import styled from 'styled-components';
import calculatePadding from './utils/calculate-padding';
import { size } from './constants';

const StyledButtonBase = styled.button`${({ theme, styled = {} }) => {
    const { vertical: verticalPadding, horizontal: horizontalPadding } = calculatePadding({ theme });
    return `
        cursor          : pointer;
        font-size       : ${styled.size ? size[styled.size] || styled.size : '0.8em'};
        border          : 1px solid ${theme.section.bgColor};
        padding         : ${verticalPadding} ${horizontalPadding};
        border-radius   : ${theme.border.radius};
        box-shadow      : ${theme.base.boxShadow};
    `;
}}`;

export default StyledButtonBase;
