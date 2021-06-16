import { createMuiTheme } from '@material-ui/core/styles';

const IC_BLACK = '#202020';

const TractorZoomTheme = createMuiTheme({
    palette: {
        common: {
            black: IC_BLACK,
        },
        error: {
            main: '#c3134f',
        },
        primary: {
            main: '#1f6df3',
        },
        secondary: {
            main: '#0f223c',
        },
        success: {
            main: '#008a1a',
        },
        text: {
            disabled: 'rgba(0, 0, 0, 0.25)',
            primary: IC_BLACK,
            secondary: '#818181',
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
