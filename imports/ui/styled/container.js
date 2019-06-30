import styled from 'styled-components';

const StyledContainer = styled.div`
    padding   : 0 ${props => props.theme.base.padding};
    width     : 100%;
    margin    : 0 auto;
    max-width : ${props => props.theme.breakpoint.tablet};

    @media only screen and (min-width: ${props => props.theme.breakpoint.computer}) {
        max-width: ${props => props.theme.breakpoint.computer};
    }
`;

export default StyledContainer;