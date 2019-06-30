import { css } from 'styled-components';

const overlay = css`
    position        : absolute;
    top             : 0;
    left            : 0;
    right           : 0;
    bottom          : 0;
    background-color: ${({ styled = {} }) => styled.bgColor ? styled.bgColor : 'rgba(255, 255, 255, 0.5)'};
`;

export default overlay;