import React from 'react';
import Button, { PrimaryButton, OutlineButton, TextButton } from '../packages/button/src/index';
import SaveIcon from '@material-ui/icons/Save';
import Typography from '@material-ui/core/Typography';

const ButtonExamples = () => {
    const buttonStyles = {
        margin: 20,
    };

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
                @tractorzoom/button
            </Typography>
            <Typography style={{ textAlign: 'center' }} variant='h4'>
                Primary Button
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <PrimaryButton style={buttonStyles}>Primary</PrimaryButton>
                <PrimaryButton disabled style={buttonStyles}>
                    Disabled
                </PrimaryButton>
                <PrimaryButton loading style={buttonStyles}>
                    Loading
                </PrimaryButton>
            </div>

            <Typography style={{ textAlign: 'center' }} variant='h4'>
                Secondary Button
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <OutlineButton style={buttonStyles}>Outlined</OutlineButton>
                <OutlineButton disabled style={buttonStyles}>
                    Outlined Disabled
                </OutlineButton>
                <OutlineButton loading style={buttonStyles}>
                    Outlined Loading
                </OutlineButton>
            </div>
            <Typography style={{ textAlign: 'center' }} variant='h4'>
                Tertiary Button
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Button variant='text' style={buttonStyles}>
                    Text
                </Button>
                <Button variant='text' disabled style={buttonStyles}>
                    Text Disabled
                </Button>
                <Button variant='text' loading style={buttonStyles}>
                    Text Loading
                </Button>
            </div>
            <Typography style={{ textAlign: 'center' }} variant='h4'>
                Misc Button
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Button style={buttonStyles}>No Styles</Button>
                <Button disabled style={buttonStyles}>
                    No Styles Disabled
                </Button>
                <Button loading style={buttonStyles}>
                    No Styles Loading
                </Button>
                <Button startIcon={<SaveIcon />} style={buttonStyles}>
                    Button With Start Icon
                </Button>
                <Button fullWidth style={buttonStyles}>
                    Full Width
                </Button>
            </div>
        </div>
    );
};

export default ButtonExamples;
