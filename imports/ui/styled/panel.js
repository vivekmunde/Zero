import styled from 'styled-components';
import { darken } from 'polished';

const StyledPanelHeader = styled.div`${({ theme }) => {
    const { base: { padding } } = theme;
    return `
        padding: ${padding};
    `;
}}`;

const StyledPanelBody = styled.div`${({ theme }) => {
    const { base: { padding } } = theme;
    return `
        padding: ${padding};
    `;
}}`;

const StyledPanel = styled.div`${({ theme, styled = {} }) => {
    const { border: { color: borderColor, radius: borderRadius }, section: { bgColor: sectionBgColor } } = theme;
    const { bgColor, color } = styled;
    return `
        background-color: ${bgColor || sectionBgColor};
        ${color ? `color: ${color}` : ''};
        border          : 1px solid ${bgColor ? darken('0.05', bgColor) : borderColor};
        border-radius   : ${borderRadius};

        ${StyledPanelHeader}+${StyledPanelBody} {
            padding-top: 0;
        }
    `;
}}`;

export {
    StyledPanel,
    StyledPanelHeader,
    StyledPanelBody
};