import styled from 'styled-components';

const StyledIcon = styled.i``;

const StyledLeftIcon = styled(StyledIcon)`
    margin-right: ${({ theme }) => theme.base.margin}
`;

const StyledRightIcon = styled(StyledIcon)`
    margin-left: ${({ theme }) => theme.base.margin}
`;

export {
    StyledIcon,
    StyledLeftIcon,
    StyledRightIcon
}