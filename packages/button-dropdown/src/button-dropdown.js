import React, { useEffect, useRef, useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CircularProgress from '@material-ui/core/CircularProgress';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import PropTypes from 'prop-types';
import useStyles from './styles';

const ButtonDropdown = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(props.options.indexOf(props.selectedOption));
    const anchorRef = useRef(null);

    useEffect(() => {
        setSelectedIndex(props.options.indexOf(props.selectedOption));
    }, [props.selectedOption]);

    const handleClick = () => {
        props.onChange(props.options[selectedIndex]);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);

        if (props.onSelectionChange) {
            props.onSelectionChange(props.options[index]);
        }
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={props.className}>
            <ButtonGroup
                disabled={props.disabled || props.isLoading}
                variant='contained'
                color={props.color}
                ref={anchorRef}
                aria-label='split button'
            >
                <Button onClick={handleClick}>
                    {props.isLoading && <CircularProgress className={classes.loadingSpinner} />}
                    {`${props.label ? `${props.label} ` : ''}${props.options[selectedIndex] || ''}`}
                </Button>
                <Button
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label={props.label || 'select an option'}
                    aria-haspopup='menu'
                    color={props.color}
                    disabled={props.isLoading}
                    onClick={handleToggle}
                    size='small'
                >
                    <ArrowDropDownIcon />
                </Button>
            </ButtonGroup>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                style={{ zIndex: 1 }}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id='split-button-menu'>
                                    {props.options.map((option, index) => (
                                        <MenuItem
                                            key={option}
                                            selected={option === props.selectedOption}
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                        >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
};

ButtonDropdown.defaultProps = {
    className: '',
    color: 'primary',
    disabled: false,
    isLoading: false,
    label: '',
};

ButtonDropdown.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onSelectionChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedOption: PropTypes.string,
};

export default ButtonDropdown;
