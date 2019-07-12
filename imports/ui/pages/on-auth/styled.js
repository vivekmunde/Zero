import styled from 'styled-components';

const StyledOnAuthPage = styled.div`${({ theme }) => {
    const { base: { padding: basePadding, margin: baseMargin } } = theme;
    return `
        padding: ${basePadding};
        margin : ${baseMargin};
    `;
}}`;

export {
    StyledOnAuthPage
}