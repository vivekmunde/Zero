import styled from 'styled-components';

const overlay = styled.div`${({ theme, styled = {} }) => {
    const { active } = styled;
    return `
        position        : fixed;
        top             : 0;
        left            : 0;
        right           : 0;
        bottom          : 0;
        background-color: ${theme.isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.25)'};
        display         : ${active ? 'block' : 'none'}
    `;
}}`;

export default overlay;