import { createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const IC_BLACK = 'rgba(0,0,0,0.92)';

export const useDarkMode = () => useMediaQuery('(prefers-color-scheme: dark)');

const Theme = (useDarkMode) =>
    createMuiTheme({
        palette: {
            action: {
                active: useDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                disabled: useDarkMode ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.25)',
                disabledBackground: useDarkMode ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.25)',
                hover: useDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                selected: useDarkMode ? 'rgba(255, 255, 255, 0.16)' : 'rgba(0, 0, 0, 0.08)',
            },
            background: {
                default: useDarkMode ? '#303030' : '#FCFCFC',
                paper: useDarkMode ? '#424242' : '#fff',
            },
            common: {
                black: IC_BLACK,
            },
            divider: useDarkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
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
                disabled: useDarkMode ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.25)',
                primary: useDarkMode ? '#fff' : IC_BLACK,
                secondary: useDarkMode ? '#c7c7c7' : 'rgba(0,0,0,0.60)',
            },
            contrastThreshold: 3,
            tonalOffset: 0.2,
            type: useDarkMode ? 'dark' : 'light',
        },
        typography: {
            fontFamily: ['Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
        },
        spacing: 4,
    });

export default Theme;
