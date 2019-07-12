import styled from 'styled-components';
import { math } from 'polished';
import { StyledIcon } from '/imports/ui/styled/icon';

const StyledNotFoundPage = styled.div`${({ theme }) => {
    const { base: { padding: basePadding, margin: baseMargin } } = theme;
    return `
        padding: ${math(`${basePadding}*2`)};
        margin : ${math(`${baseMargin}*2`)} 0;
    `;
}}`;

const StyledPageIcon = styled(StyledIcon)`
    font-size: 4rem;
`;

export {
    StyledNotFoundPage,
    StyledPageIcon
};