import { createGlobalStyle } from 'styled-components';

const StyledGlobalTypography = createGlobalStyle`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin     : ${({ theme }) => theme.base.margin} 0;
        font-weight: normal;
    }

    h1 {
        font-size: 2.25rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.75rem;
    }

    h4 {
        font-size: 1.5rem;
    }

    h5 {
        font-size: 1.25rem;
    }

    h6 {
        font-size: 1rem;
    }

    a {
        color: ${({ theme }) => theme.link.color};
    }
`;

export default StyledGlobalTypography;