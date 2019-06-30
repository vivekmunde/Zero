import styled from 'styled-components';
import StyledButtonBase from './base';
import buttonThemeMixin from './mixins/button-theme';

const StyledSecondaryButton = styled(StyledButtonBase)
    .attrs(
        ({ theme }) => ({
            styled: {
                bgColor: theme.isDark ? theme.body.bgColor : theme.section.bgColor,
                borderColor: theme.colors.primary,
                color: theme.colors.primary,
            }
        })
    )`
    ${buttonThemeMixin}
`;

export default StyledSecondaryButton;