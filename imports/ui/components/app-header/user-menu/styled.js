import styled from 'styled-components';
import { StyledList as StyledMenuList, StyledDividedListItem as StyledMenuListItem } from '/imports/ui/styled/list';
import { StyledLeftIcon as StyledMenuListLeftIcon } from '/imports/ui/styled/icon';
import StyledBareButton from '/imports/ui/styled/button/bare';

const StyledSidebarCloseButton = styled(StyledBareButton)`${({ theme }) => {
    const {
        base: { padding: basePadding, margin: baseMargin },
        font: { color: fontColor }
    } = theme;
    return `
        padding: ${basePadding};
        margin : -${baseMargin} -${baseMargin} -${baseMargin} ${baseMargin};
        color  : ${fontColor};
    `;
}}`;

const StyledSidebar = styled.div`${({ theme, styled = {} }) => {
    const {
        border: { color: borderColor },
        font: { color: fontColor, size: fontSize },
        section: { bgColor: sectionBgColor }
    } = theme;
    const { active } = styled;
    return `
        position        : fixed;
        top             : 0;
        right           : ${active ? '0' : '-300px'};
        bottom          : 0;
        width           : ${active ? '90%' : '0'};
        max-width       : 300px;
        background-color: ${sectionBgColor};
        border-left     : 1px solid ${borderColor};
        transition      : right 0.2s, width 0.2s;
        box-sizing      : border-box;

        ${StyledMenuList} {
            ${StyledMenuListItem} {
                color          : ${fontColor};
                font-size      : ${fontSize};
                text-decoration: none;
                text-align     : left;
                width          : 100%;
            
                &:hover,
                &:active {
                    text-decoration : none;
                }
            
                ${StyledMenuListLeftIcon} {
                    color: ${fontColor};
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