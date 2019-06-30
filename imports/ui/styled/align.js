import styled from 'styled-components';

const StyledFlexAlign = styled.div`
    display       : flex;
    flex-direction: row;
`;

const StyledFlexAlignLeft = styled.div`
    margin-right: auto;
`;

const StyledFlexAlignRight = styled.div`
    margin-left: auto;
`;

const StyledFlexAlignCenter = styled.div`
    margin-left: auto;
    margin-right: auto;
`;

const StyledTextAlignCenter = styled.div`
    text-align: center;
`;

export {
    StyledTextAlignCenter,
    StyledFlexAlign,
    StyledFlexAlignLeft,
    StyledFlexAlignRight,
    StyledFlexAlignCenter
};