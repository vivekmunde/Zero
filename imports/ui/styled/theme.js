import { lighten, darken } from "polished";
import borderColorOnDarkBackground from "./utils/border-color-on-dark-background";

const colors = {
    blue: '#007edc',
};

const brightThemeBaseBgColor = '#f8f8f8';
const brightTheme = {
    body: {
        bgColor: brightThemeBaseBgColor
    },
    section: {
        bgColor: lighten('0.05', brightThemeBaseBgColor)
    },
    border: {
        color: darken('0.05', brightThemeBaseBgColor)
    },
    font: {
        color: darken('0.6', brightThemeBaseBgColor),
        lightColor: darken('0.3', brightThemeBaseBgColor)
    },
    boxShadow: {
        color: darken('0.04', brightThemeBaseBgColor)
    }
};

const darkThemeBaseBgColor = '#231f44';
const darkTheme = {
    body: {
        bgColor: darkThemeBaseBgColor
    },
    section: {
        bgColor: lighten('0.05', darkThemeBaseBgColor)
    },
    border: {
        color: borderColorOnDarkBackground({ color: darkThemeBaseBgColor })
    },
    font: {
        color: lighten('0.7', darkThemeBaseBgColor),
        lightColor: lighten('0.5', darkThemeBaseBgColor)
    },
    boxShadow: {
        color: darken('0.04', darkThemeBaseBgColor)
    }
};

export default ({ isDark } = {}) => {
    const theme = isDark ? darkTheme : brightTheme;
    return {
        isDark,
        appHeader: {
            height: '50px'
        },
        base: {
            boxShadow: `1px 1px 3px 0 ${theme.boxShadow.color}`,
            margin: '0.9rem',
            padding: '0.9rem'
        },
        body: {
            bgColor: theme.body.bgColor
        },
        border: {
            color: theme.border.color,
            radius: '2px',
        },
        breakpoint: {
            mobile: '320px',
            tablet: '768px',
            computer: '992px',
            large: '1200px'
        },
        colors: {
            primary: colors.blue,
            error: '#db2828',
            warning: '#ff893a',
            success: '#21ba45',
            facebook: '#3b5998',
            google: '#dd4b39',
            twitter: '#55acee',
            linkedIn: '#1f88be'
        },
        font: {
            family: `Arial, Helvetica Neue, Helvetica, 'sans-serif'`,
            color: theme.font.color,
            size: '1rem'
        },
        link: {
            color: colors.blue,
        },
        section: {
            bgColor: theme.section.bgColor
        }
    };
};