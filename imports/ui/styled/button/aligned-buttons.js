import styled from 'styled-components';
import StyledButtonBase from './base';
import { alignedButtonMargin } from './constants';

const StyledHorizontalAlignedButtons = styled.div`
    margin: 0 0 -${alignedButtonMargin} 0;
    ${StyledButtonBase}+${StyledButtonBase} {
        margin: 0 0 0 ${alignedButtonMargin};
    }
    ${StyledButtonBase} {
        margin-bottom: ${alignedButtonMargin};
    }
`;

const StyledVerticalAlignedButtons = styled.div`
    ${StyledButtonBase} {
        display: block;
        margin : 0 0 ${alignedButtonMargin} 0;
        width  : 100%;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;

export {
    StyledHorizontalAlignedButtons,
    StyledVerticalAlignedButtons
};
