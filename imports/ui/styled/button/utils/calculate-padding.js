import { math } from 'polished';

const calculatePadding = ({ theme }) => ({
    vertical: math(`${theme.base.padding}/2`),
    horizontal: theme.base.padding
});

export default calculatePadding;
