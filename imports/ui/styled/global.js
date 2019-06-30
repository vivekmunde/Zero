import React from 'react';
import { createGlobalStyle } from 'styled-components';
import StyledGlobalTypography from './global-typography';

const StyledGlobal = createGlobalStyle`
    * {
        padding   : 0;
        margin    : 0;
        box-sizing: border-box;
    }

    body {
        font-family     : ${({ theme }) => theme.font.family};
        font-size       : ${({ theme }) => theme.font.size};
        background-color: ${({ theme }) => theme.body.bgColor};
        color           : ${({ theme }) => theme.font.color};
    }
`;

const Global = (props) => (
    <React.Fragment>
        <StyledGlobalTypography {...props} />
        <StyledGlobal {...props} />
    </React.Fragment>
);

export default Global;