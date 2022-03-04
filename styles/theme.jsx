export const size = {
    largest: '75em', // 1200px
    large: '56.25em', // 900px
    medium: '37.5em', // 600px
    small: '31.25em', // 500px
    smallest: '25em', // 400px
};

const Theme = {
    mainColor: '#0000ff',
    mq: {
        // laptop: `@media only screen and (max-width: ${size.largest})`,
        tablet: `@media only screen and (max-width: ${size.large})`, //900px
        mobile: `@media only screen and (max-width: ${size.medium})`, //600px
    },
};

export default Theme;
