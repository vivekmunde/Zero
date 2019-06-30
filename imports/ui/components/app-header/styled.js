import styled, { css } from 'styled-components';
import { math } from 'polished';
import StyledContainer from '/imports/ui/styled/container'
import StyledBareButton from '/imports/ui/styled/button/bare';
import Link from '/imports/ui/components/link';

const styledHeaderItem = css`
    display        : flex;
    flex-direction : row;
    justify-content: center;
    align-items    : center;
    height         : 100%;
    padding        : 0 ${({ theme }) => theme.base.padding};
`;

const StyledHeaderLogo = styled.img`
    max-height: ${({ theme }) => math(`${theme.appHeader.height}/1.75`)};
`;

const StyledHeaderButton = styled(StyledBareButton)`${({ theme }) => {
    const { base, font } = theme;
    return `
        ${styledHeaderItem}
        font-size: ${font.size};
        color    : ${font.color};
        padding  : 0 ${base.padding};
    `;
}}`;

const StyledHeaderLink = styled(Link)`
    ${styledHeaderItem}
    color          : ${props => props.theme.font.color};
    text-decoration: none;
`;

const StyledHeaderSection = styled.div`
    display        : flex;
    flex-direction : row;
    justify-content: center;
    align-items    : center;
    height         : 100%;
    flex           : ${({ styled = {} }) => styled.isSpacer ? '1 1 auto' : '0'}
`;

const StyledHeaderSections = styled.div`
    display        : flex;
    flex-direction : row;
    justify-content: center;
    align-items    : center;
    height         : 100%;
    margin         : 0 -${({ theme }) => theme.base.margin};
`;

const StyledHeader = styled.header`${({ theme }) => {
    const { appHeader, base, border, section } = theme;
    return `
        height          : ${appHeader.height};
        border-bottom   : solid 1px ${border.color};
        margin-bottom   : ${base.margin};
        background-color: ${section.bgColor};

        ${StyledContainer} {
            height: ${appHeader.height};
        }
    `;
}}`;

export {
    StyledHeader,
    StyledHeaderSections,
    StyledHeaderSection,
    StyledHeaderButton,
    StyledHeaderLink,
    StyledHeaderLogo
};