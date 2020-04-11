import styled from 'styled-components';
import calculatePadding from './utils/calculate-padding';
import StyledAttachedIconButton from './button';

const StyledAttachedIconContainer = styled.span`${({ theme }) => {
    const { vertical: verticalPadding, horizontal: horizontalPadding } = calculatePadding({ theme });
    return `
        padding   : ${verticalPadding} ${horizontalPadding};
        background: rgba(0, 0, 0, 0.1);
        width     : 1em;
        box-sizing: content-box;
    `;
}}`;

const StyledLeftAttachedIconContainer = styled(StyledAttachedIconContainer)`${({ theme }) => {
    const { border: { radius: borderRadius } } = theme;
    const { vertical: verticalPadding, horizontal: horizontalPadding } = calculatePadding({ theme });
    return `
        float        : left;
        margin       : -${verticalPadding} ${horizontalPadding} -${verticalPadding} -${horizontalPadding};
        border-radius: ${borderRadius} 0 0 ${borderRadius};
    `;
}}`;

const StyledRightAttachedIconContainer = styled(StyledAttachedIconContainer)`${({ theme }) => {
    const { border: { radius: borderRadius } } = theme;
    const { vertical: verticalPadding, horizontal: horizontalPadding } = calculatePadding({ theme });
    return `
        float        : right;
        margin       : -${verticalPadding} -${horizontalPadding} -${verticalPadding} ${horizontalPadding};
        border-radius: 0 ${borderRadius} ${borderRadius} 0;
    `;
}}`;

export {
    StyledAttachedIconButton,
    StyledLeftAttachedIconContainer,
    StyledRightAttachedIconContainer
};
