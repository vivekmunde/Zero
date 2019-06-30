import styled from 'styled-components';
import StyledButtonBase from './base';

const StyledBareButton = styled(StyledButtonBase)`
    padding         : 0;
    margin          : 0;
    border          : none;
    border-radius   : 0;
    box-shadow      : none;
    background-color: transparent;
`;

export default StyledBareButton;