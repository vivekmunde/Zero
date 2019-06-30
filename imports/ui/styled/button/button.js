import styled from 'styled-components';
import StyledButtonBase from './base';
import buttonThemeMixin from './mixins/button-theme';

const StyledButton = styled(StyledButtonBase)`
    ${buttonThemeMixin}
`;

export default StyledButton;