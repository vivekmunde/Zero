import { lighten, darken } from 'polished';

const themer = {
    border: {
        color: ({ bgColor }, inverted = false) => (
            inverted
                ? lighten('0.15', bgColor)
                : darken('0.05', bgColor))
    },
    font: {
        color: ({ bgColor }, inverted = false) => (
            inverted
                ? lighten('0.7', bgColor)
                : darken('0.6', bgColor)
        )
    },
    section: {
        bgColor: ({ bgColor }, inverted = false) => (
            inverted
                ? darken('0.07', bgColor)
                : lighten('0.05', bgColor)
        )
    },
    shadow: {
        box: {
            color: ({ bgColor }) => (
                darken('0.08', bgColor)
            )
        }
    }
};

export default themer;
