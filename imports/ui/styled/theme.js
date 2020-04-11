import themer from './utils/themer';

const colors = {
    blue: '#007edc',
    red: '#db2828',
    orange: '#ff893a',
    green: '#21ba45',
    facebook: '#3b5998',
    google: '#dd4b39',
    twitter: '#55acee',
    linkedIn: '#1f88be'
};

const defaultThemeConfiguration = {
    baseColor: '#f8f8f8',
    border: {
        radius: '3px'
    },
    font: {
        family: `Arial, Helvetica Neue, Helvetica, 'sans-serif'`,
        size: '1rem'
    }
};

// const brightBgColor = '#f8f8f8';
// const darkBgColor = '#231f44';

const configurTheme = (configuration, inverted) => {
    const get = (it, from, fallback) => from[it] || fallback[it];
    const bgColor = get('baseColor', configuration, defaultThemeConfiguration);
    const border = get('border', configuration, defaultThemeConfiguration);
    const font = get('font', configuration, defaultThemeConfiguration);

    return {
        appHeader: {
            height: '50px'
        },
        base: {
            boxShadow: `0 0 5px 1px ${themer.shadow.box.color({ bgColor }, inverted)}`,
            margin: '0.8em',
            padding: '0.8em'
        },
        body: {
            bgColor
        },
        border: {
            color: themer.border.color({ bgColor }, inverted),
            radius: border.radius,
        },
        breakpoint: {
            mobile: '320px',
            tablet: '768px',
            computer: '992px',
            large: '1200px'
        },
        button: {
            border: {
                radius: border.radius,
            }
        },
        colors: {
            ...colors,
            primary: colors.blue,
            error: colors.red,
            warning: colors.orange,
            success: colors.green
        },
        font: {
            family: font.family,
            color: themer.font.color({ bgColor }, inverted),
            size: font.size
        },
        link: {
            color: colors.blue,
        },
        section: {
            bgColor: themer.section.bgColor({ bgColor })
        }
    };
};

export default configurTheme;
