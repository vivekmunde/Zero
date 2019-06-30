import styled from 'styled-components';
import borderColorOnDarkBackground from '/imports/ui/styled/utils/border-color-on-dark-background';
import { StyledList as StyledMenuList, StyledDividedListItem as StyledMenuListItem } from '/imports/ui/styled/list';
import { StyledLeftIcon as StyledMenuListLeftIcon } from '/imports/ui/styled/icon';
import StyledSidebarCloseButton from '/imports/ui/styled/button/bare';

const StyledSidebar = styled.div`${({ theme, styled = {} }) => {
    const { base: { padding: basePadding, margin: baseMargin }, colors: { primary: primaryColor } } = theme;
    const { active } = styled;
    return `
        position        : fixed;
        top             : 0;
        right           : ${active ? '0' : '-300px'};
        bottom          : 0;
        width           : ${active ? '90%' : '0'};
        max-width       : 300px;
        background-color: ${primaryColor};
        color           : #fff;
        transition      : right 0.2s, width 0.2s;

        ${StyledSidebarCloseButton} {
            padding: ${basePadding};
            margin : -${baseMargin} -${baseMargin} -${baseMargin} ${baseMargin};
            color  : #fff;
        }

        ${StyledMenuList} {
            ${StyledMenuListItem} {
                color           : #fff;
                border-color    : ${borderColorOnDarkBackground({ color: primaryColor })};
                text-decoration : none;
            
                &:hover,
                &:active {
                    text-decoration : none;
                }
            
                ${StyledMenuListLeftIcon} {
                    color: #fff;
                }
            }
        }
    `;
}}`;

export {
    StyledSidebar,
    StyledMenuList,
    StyledMenuListItem,
    StyledMenuListLeftIcon,
    StyledSidebarCloseButton
};