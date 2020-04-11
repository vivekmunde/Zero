import styled from 'styled-components';

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
    const { border: { color: borderColor, radius: borderRadius }, section: { bgColor: sectionBgColor }, base: { boxShadow } } = theme;
    const { bgColor, color } = styled;
    return `
        background-color: ${bgColor || sectionBgColor};
        ${color ? `color: ${color}` : ''};
        border          : 1px solid ${bgColor ? theme.themer.border.color(bgColor) : borderColor};
        border-radius   : ${borderRadius};
        box-shadow      : ${boxShadow};

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
