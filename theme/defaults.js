const fontSansSerif = 'Noto Sans,sans-serif';
const fontBase = fontSansSerif;

const fontSizeXs = 12;
const fontSizeSm = 14;
const fontSizeMd = 21;
const fontSizeLg = 28;
const fontSizeHg = 37;

const fontWeightBase 	= 	400;
const fontWeightLight 	= 	300;
const fontWeightMedium 	= 	500;
const fontWeightBold 	= 	600;

const transitionBase = 'all .2s ease-in-out';
const transitionFade = 'opacity .15s linear';

const defaults = {
    fontFamily: {
        sansSerif: fontSansSerif,
        base: fontBase
    },
    fontSize: {
        xs: fontSizeXs,
        sm: fontSizeSm,
        md: fontSizeMd,
        lg: fontSizeLg,
        hg: fontSizeHg
    },
    fontWeight: {
        light: fontWeightLight,
        base: fontWeightBase,
        medium: fontWeightMedium,
        bold: fontWeightBold
    },
    transition: {
        base: transitionBase,
        opacity: transitionFade
    }
};

export default defaults;