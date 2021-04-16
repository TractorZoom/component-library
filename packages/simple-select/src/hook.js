import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';

const getOptions = (options) => {
    const isStringOption = options && typeof options[0] === 'string';

    return options.map((option) => {
        const value = isStringOption ? option : option.value;
        const label = isStringOption ? option : option.label;

        return (
            <MenuItem key={value} value={value}>
                {label}
            </MenuItem>
        );
    });
};

const useSimpleSelect = (props) => {
    const classes = useStyles();
    const { InputLabelProps, InputProps, options, SelectProps, ...otherProps } = props;
    const labelClassName = otherProps.value && !otherProps.error ? classes.activeLabel : '';
    const inputLabelPropsObj = {
        ...InputLabelProps,
        className: InputLabelProps.className ? clsx(labelClassName, InputLabelProps.className) : labelClassName,
    };
    const selectPropsClasses = SelectProps.classes ? SelectProps.classes : {};
    const selectPropsObj = {
        ...SelectProps,
        classes: {
            ...selectPropsClasses,
            icon: classes.chevronIcon,
        },
        IconComponent: KeyboardArrowDownIcon,
    };

    const updatedInputProps = {
        ...InputProps,
        className: clsx(classes.input, {
            [classes.noLabel]: !props.label,
            [InputProps.className]: InputProps.className,
        }),
        classes: {
            error: classes.error,
            focused: classes.focused,
        },
        disableUnderline: true,
    };

    return {
        ...otherProps,
        InputLabelProps: inputLabelPropsObj,
        InputProps: updatedInputProps,
        options: getOptions(options),
        SelectProps: selectPropsObj,
        select: true,
    };
};

export default useSimpleSelect;
