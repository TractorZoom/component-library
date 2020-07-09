import React, { useState } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import useStyles from './styles';
import withWidth from '@material-ui/core/withWidth';

const SidePanel = (props) => {
    const isMobile = props.width === 'xs' || props.width === 'sm';

    const classes = useStyles();
    const [open, setOpen] = useState(!isMobile);

    const getToggleOpenButtonMargin = () => {
        if (open) {
            return 0;
        } else {
            return isMobile ? `-${window.innerWidth}px` : `-300px`;
        }
    };

    return (
        <>
            <Drawer
                className={isMobile ? classes.drawerMobile : classes.drawer}
                anchor='left'
                open={open}
                variant='persistent'
                classes={{
                    paper: isMobile ? classes.drawerPaperMobile : classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={() => setOpen(false)}>
                        <ChevronLeftIcon style={{ color: 'white' }} />
                    </IconButton>
                </div>
                <Divider style={{ backgroundColor: 'white' }} />
                {props.children.map((child) => {
                    let newChild = { ...child };

                    newChild.props = {
                        ...newChild.props,
                        setOpen: setOpen,
                        isOpen: open,
                    };
                    return newChild;
                })}
            </Drawer>
            {!open && (
                <div
                    className={classes.toggleOpenButton}
                    style={{ marginLeft: getToggleOpenButtonMargin() }}
                    onClick={() => setOpen(true)}
                >
                    <ChevronRightIcon className={classes.icon} />
                </div>
            )}
        </>
    );
};

SidePanel.propTypes = {
    children: PropTypes.any,
};

export default withWidth()(SidePanel);
