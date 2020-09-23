import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './styles';

const BasicDialog = (props) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Dialog
            fullScreen={isMobile}
            open={props.isOpen}
            onClose={props.close}
            PaperProps={{ className: classes.container, 'data-tour': props.dataTour }}
        >
            <DialogTitle className={classes.titleContainer} disableTypography>
                <Typography variant='h5'>{props.title}</Typography>
            </DialogTitle>
            <DialogContent className={classes.contentContainer}>{props.children || ''}</DialogContent>
            <DialogActions className={classes.footerContainer}>{props.actionButtons}</DialogActions>
        </Dialog>
    );
};

BasicDialog.defaultProps = {
    actionButtons: [],
    dataTour: '',
    isOpen: false,
};

BasicDialog.propTypes = {
    actionButtons: PropTypes.array,
    children: PropTypes.node,
    close: PropTypes.func.isRequired,
    dataTour: PropTypes.string,
    isOpen: PropTypes.bool,
    title: PropTypes.string.isRequired,
};

export default BasicDialog;
