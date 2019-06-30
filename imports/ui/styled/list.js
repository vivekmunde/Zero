import styled from 'styled-components';

const StyledList = styled.div`${({ styled = {} }) => {
    const { bgColor, color } = styled;
    return `
        padding   : 0;
        margin    : 0;
        list-style: none;
        ${bgColor ? `background-color: ${bgColor}` : ''}
        ${color ? `color: ${color}` : ''}
    `;
}}`;

const StyledListItem = styled.div`${({ theme }) => {
    const { base: { padding } } = theme;
    return `
        display: block;
        padding: ${padding} ${padding} 0 ${padding};

        &:last-child {
            padding-bottom: ${padding};
        }
    `;
}}`;

const StyledDividedListItem = styled(StyledListItem)`${({ theme }) => {
    const { base, border } = theme;
    return `
        padding-bottom: ${base.padding};
        border-bottom : 1px solid ${border.color};

        &:last-child {
            border-bottom: none;
        }
    `;
}}`;

export {
    StyledList,
    StyledListItem,
    StyledDividedListItem
};