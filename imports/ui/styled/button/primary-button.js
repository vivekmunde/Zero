import styled from 'styled-components';
import StyledButtonBase from './base';
import buttonThemeMixin from './mixins/button-theme';

const StyledPrimaryButton = styled(StyledButtonBase)
    .attrs(
        ({ theme }) => ({
            styled: {
                bgColor: theme.colors.primary,
                color: '#fff'
            }
        })
    )`
    ${buttonThemeMixin}
`;

export default StyledPrimaryButton;