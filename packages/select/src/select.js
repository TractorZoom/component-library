import React, { useState } from 'react';
import useStyles, { useTextFieldStyles } from './styles';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import Listbox from './listbox';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const filter = createFilterOptions();

const Select = (props) => {
    const {
        color,
        darkMode,
        error,
        helperText,
        label,
        options,
        renderOption,
        required,
        selectedOption,
        ...otherProps
    } = props;
    const classes = useStyles(darkMode)();
    const textFieldClasses = useTextFieldStyles(darkMode)();

    const hasStringOptions = options && typeof options[0] === 'string';

    return (
        <Autocomplete
            autoHighlight
            autoSelect
            id='select'
            style={{ width: '100%' }}
            classes={classes}
            disableListWrap
            filterOptions={(options, params) => {
                const filtered = filter(options, params);

                if (params.inputValue !== '' && props.onAddNew && filtered.length === 0) {
                    const addNewOption = {
                        inputValue: params.inputValue,
                        label: `+ Add ${params.inputValue}`,
                    };

                    filtered.push(hasStringOptions ? addNewOption.label : addNewOption);
                }

                return filtered;
            }}
            handleHomeEndKeys
            ListboxComponent={Listbox}
            ListboxProps={props}
            options={options}
            renderInput={(params) => (
                <TextField
                    {...params}
                    className={textFieldClasses.input}
                    color={color}
                    error={error}
                    helperText={helperText}
                    InputProps={{
                        ...params.InputProps,
                        classes: {
                            ...params.InputProps.classes,
                            notchedOutline: textFieldClasses.notchedOutline,
                        },
                        'data-cy': props.dataCy,
                    }}
                    size='small'
                    variant='outlined'
                    label={label}
                    fullWidth
                    required={required}
                />
            )}
            renderOption={renderOption}
            value={selectedOption}
            {...otherProps}
            onChange={(event, newValue) => {
                const newValueTitle =
                    typeof newValue === 'string' ? newValue : newValue && newValue.label ? newValue.label : '';

                if (newValueTitle.includes('+ Add')) {
                    props.onAddNew(newValueTitle.replace('+ Add ', ''));
                } else {
                    props.onChange(event, newValue);
                }
            }}
        />
    );
};

Select.defaultProps = {
    color: null,
    darkMode: false,
    error: false,
    hasAddNewOption: false,
    helperText: '',
    dataCy: undefined,
    onAddNew: undefined,
    renderOption: (option) => <Typography noWrap>{option}</Typography>,
    required: false,
};

Select.propTypes = {
    color: PropTypes.string,
    darkMode: PropTypes.bool,
    error: PropTypes.bool,
    onAddNew: PropTypes.func,
    helperText: PropTypes.string,
    dataCy: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    renderOption: PropTypes.func,
    required: PropTypes.bool,
    selectedOption: PropTypes.any,
};

export default Select;
