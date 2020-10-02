import React, { useEffect } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import useStyles from './styles';
import withWidth from '@material-ui/core/withWidth';

const darkTheme = createMuiTheme({
    palette: {
        background: { default: '#31435a', paper: '#31435a' },
        type: 'dark',
    },
});

const SidePanel = (props) => {
    const { open, setOpen } = props;
    const isMobile = props.width === 'xs' || props.width === 'sm';
    const classes = useStyles();

    useEffect(() => {
        setOpen(!isMobile);
    }, []);

    return (
        <ThemeProvider
            theme={(theme) =>
                createMuiTheme({
                    ...theme,
                    palette: {
                        ...theme.palette,
                        background: darkTheme.palette.background,
                        divider: darkTheme.palette.divider,
                        text: darkTheme.palette.text,
                        type: darkTheme.palette.type,
                    },
                })
            }
        >
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
                    {Boolean(props.headerComponent) && props.headerComponent}
                    <IconButton className={classes.closeButton} onClick={() => setOpen(false)}>
                        <ChevronLeftIcon style={{ color: 'white' }} />
                    </IconButton>
                </div>
                <Divider className={classes.headerDivider} />
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
        </ThemeProvider>
    );
};

SidePanel.propTypes = {
    children: PropTypes.any,
    headerComponent: PropTypes.node,
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};

export default withWidth()(SidePanel);
