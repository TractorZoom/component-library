import { makeStyles, useTheme } from '@material-ui/core/styles';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { TractorZoomLogo } from '../packages/theme/src';

const useStyles = makeStyles((theme) => ({
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
    },
    swatch: {
        border: `1px solid #00000019`,
        borderRadius: 20,
        height: 100,
        width: 100,
    },
}));

const ThemeExamples = () => {
    const theme = useTheme();
    const classes = useStyles();
    const getSwatch = (color, title) => (
        <div className={classes.container}>
            <div className={classes.swatch} style={{ background: color }} />
            <Typography>{title}</Typography>
            <Typography>{color}</Typography>
        </div>
    );

    return (
        <div
            style={{
                margin: '40px auto',
                maxWidth: 800,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Typography style={{ textAlign: 'center' }} variant='h4'>
                @tractorzoom/theme
            </Typography>
            <Typography style={{ marginTop: 40, textAlign: 'center' }} variant='h6'>
                Tractor Zoom Logo
            </Typography>
            <TractorZoomLogo height={180} width={600} color={theme.palette.primary.main} />
            <Typography style={{ marginTop: 40, textAlign: 'center' }} variant='h6'>
                Colors
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {getSwatch(theme.palette.primary.main, 'Primary')}
                {getSwatch(theme.palette.secondary.main, 'Secondary')}
                {getSwatch(theme.palette.error.main, 'Error')}
                {getSwatch(theme.palette.success.main, 'Success')}
                {getSwatch(theme.palette.common.white, 'White')}
                {getSwatch(theme.palette.common.black, 'Black')}
            </div>
            <Typography style={{ marginTop: 40, textAlign: 'center' }} variant='h6'>
                Backgrounds
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {getSwatch(theme.palette.background.default, 'Default')}
                {getSwatch(theme.palette.background.paper, 'Paper')}
            </div>
            <Typography style={{ marginTop: 40, textAlign: 'center' }} variant='h6'>
                Text
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {getSwatch(theme.palette.text.primary, 'Primary')}
                {getSwatch(theme.palette.text.secondary, 'Secondary')}
                {getSwatch(theme.palette.text.disabled, 'Disabled')}
            </div>
        </div>
    );
};

export default ThemeExamples;
