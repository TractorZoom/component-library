import React, { useState } from 'react';
import BasicDialog from '../packages/basic-dialog/src/index';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDarkMode } from '../packages/theme/src/theme';

export default () => {
    const [isCustomHeaderOpen, setIsCustomHeaderOpen] = useState(false);
    const [isComplexFooterOpen, setIsComplexFooterOpen] = useState(false);

    const closeDialog = (setterFunction) => () => {
        setterFunction(false);
    };
    const openDialog = (setterFunction) => () => {
        setterFunction(true);
    };

    const customHeader = [
        <Button onClick={openDialog(setIsCustomHeaderOpen)} style={{ marginTop: 20 }} variant='contained'>
            Open Custom Header Dialog
        </Button>,
        <BasicDialog
            actionButtons={[
                <Button onClick={closeDialog(setIsCustomHeaderOpen)} variant='contained'>
                    Close
                </Button>,
            ]}
            close={closeDialog(setIsCustomHeaderOpen)}
            headerComponent={
                useDarkMode() ? (
                    <img src='/iron-comps-powered-by-tractor-zoom-black.png' style={{ height: 25 }} />
                ) : (
                    <img src='/iron-comps-powered-by-tractor-zoom_rectangle.svg' style={{ height: 25 }} />
                )
            }
            isOpen={isCustomHeaderOpen}
        >
            <Typography>Dialog content is passed in as children</Typography>
        </BasicDialog>,
    ];
    const complexFooter = [
        <Button onClick={openDialog(setIsComplexFooterOpen)} style={{ marginTop: 20 }} variant='contained'>
            Open Complex Footer Dialog
        </Button>,
        <BasicDialog
            actionButtons={[
                <Typography style={{ marginRight: 'auto' }}>Subtext in footer</Typography>,
                <Button color='primary' key='confirm' onClick={closeDialog(setIsComplexFooterOpen)} variant='contained'>
                    Confirm
                </Button>,
            ]}
            close={closeDialog(setIsComplexFooterOpen)}
            isOpen={isComplexFooterOpen}
            title='Dialog Title'
        >
            <Typography>Dialog content is passed in as children</Typography>
        </BasicDialog>,
    ];

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
                @tractorzoom/basic-dialog
            </Typography>
            {customHeader}
            {complexFooter}
        </div>
    );
};
