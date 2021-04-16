import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import IconButton from '@material-ui/core/IconButton';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import InputAdornment from '@material-ui/core/InputAdornment';
import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';

const useTextField = (props) => {
    const classes = useStyles();
    const {
        InputLabelProps,
        InputProps,
        step,
        suffixLabel,
        suffixOnChange,
        suffixOptions,
        suffixValue,
        ...otherProps
    } = props;
    const labelClassName = otherProps.value && !otherProps.error ? classes.activeLabel : '';
    const inputLabelPropsObj = {
        ...InputLabelProps,
        className: InputLabelProps.className ? clsx(labelClassName, InputLabelProps.className) : labelClassName,
    };
    const inputPropsObj = {};
    const clear = () => {
        otherProps.onChange({
            target: {
                value: '',
            },
        });
    };
    const errorOrClearAdornment = otherProps.error ? (
        <InputAdornment position='end'>
            <InfoRoundedIcon className={classes.errorIcon} />
        </InputAdornment>
    ) : otherProps.value && !otherProps.disabled ? (
        <InputAdornment position='end'>
            <IconButton onClick={clear}>
                <CancelRoundedIcon className={classes.clearIcon} />
            </IconButton>
        </InputAdornment>
    ) : null;
    const endAdornment = suffixLabel ? (
        <InputAdornment className={classes.suffixLabel} position='end'>
            {suffixLabel}
        </InputAdornment>
    ) : (
        errorOrClearAdornment
    );

    if (otherProps?.type === 'number') {
        inputPropsObj.step = step;
    }

    if (otherProps?.type === 'date') {
        inputLabelPropsObj.shrink = true;
    }

    const updatedInputProps = {
        ...InputProps,
        className: clsx(classes.input, {
            [classes.optionsInput]: suffixOptions.length,
            [InputProps.className]: Boolean(InputProps.className),
        }),
        classes: {
            adornedEnd: classes.adornedEnd,
            error: classes.error,
            focused: classes.focused,
        },
        disableUnderline: true,
        endAdornment,
        inputProps: inputPropsObj,
    };

    return {
        ...otherProps,
        optionsTextFieldClassName: suffixOptions.length ? classes.optionsTextField : '',
        InputLabelProps: inputLabelPropsObj,
        InputProps: updatedInputProps,
        optionsSelectProps: {
            className: classes.optionsSelect,
            SelectProps: { classes: { select: classes.optionsSelectLabel } },
            InputProps: { className: classes.optionsSelectInput },
            options: suffixOptions,
            onChange: suffixOnChange,
            value: suffixValue,
        },
    };
};

export default useTextField;
