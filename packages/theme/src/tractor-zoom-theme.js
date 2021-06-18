import { createMuiTheme } from '@material-ui/core/styles';

const OxfordBlue = '#0e1c36';
const LightOxfordBlue = '#6e7686';
const TractorZoomBlue = '#1f6ef3';
const BostonGreen = '#0e9566';

const TractorZoomTheme = createMuiTheme({
    palette: {
        common: {
            black: OxfordBlue,
        },
        error: {
            main: '#c3134f',
        },
        primary: {
            main: TractorZoomBlue,
        },
        secondary: {
            main: OxfordBlue,
        },
        success: {
            main: BostonGreen,
        },
        text: {
            disabled: 'rgba(0, 0, 0, 0.25)',
            primary: OxfordBlue,
            secondary: LightOxfordBlue,
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    spacing: 4,
    typography: {
        fontFamily: ['Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    },
});

export default TractorZoomTheme;
