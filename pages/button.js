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
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Button style={buttonStyles}>Default</Button>
                <PrimaryButton style={buttonStyles}>Primary</PrimaryButton>
                <Button disabled style={buttonStyles}>
                    Disabled
                </Button>
                <Button loading style={buttonStyles}>
                    Loading
                </Button>
                <OutlineButton style={buttonStyles}>Outlined</OutlineButton>
                <Button color='primary' variant='outlined' style={buttonStyles}>
                    Primary Outlined
                </Button>
                <Button variant='text' style={buttonStyles}>
                    Text
                </Button>
                <TextButton style={buttonStyles}>Primary Text</TextButton>
                <Button startIcon={<SaveIcon />} style={buttonStyles}>
                    Button With Start Icon
                </Button>
                <Button loading startIcon={<SaveIcon />} style={buttonStyles}>
                    Loading Button With Start Icon
                </Button>
                <Button fullWidth style={buttonStyles}>
                    Full Width
                </Button>
            </div>
        </div>
    );
};

export default ButtonExamples;
