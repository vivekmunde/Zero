import React from 'react';
import { StyledFlexAlign, StyledFlexAlignLeft, StyledFlexAlignRight } from '/imports/ui/styled/align';
import { StyledMenuListItem } from './styled';
import ToggleUserMenuButton from './toggle-user-menu-button';

const MenuHeader = () => (
    <StyledMenuListItem>
        <StyledFlexAlign>
            <StyledFlexAlignLeft>
                Account Info
            </StyledFlexAlignLeft>
            <StyledFlexAlignRight>
                <ToggleUserMenuButton />
            </StyledFlexAlignRight>
        </StyledFlexAlign>
    </StyledMenuListItem>
);

export default MenuHeader;