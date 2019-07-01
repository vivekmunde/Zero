import styled from 'styled-components';

const overlay = styled.div`${({ styled = {} }) => {
    const { active } = styled;
    return `
        position        : fixed;
        top             : 0;
        left            : 0;
        right           : 0;
        bottom          : 0;
        background-color: rgba(0, 0, 0, 0.5);
        display         : ${active ? 'block' : 'none'}
    `;
}}`;

export default overlay;