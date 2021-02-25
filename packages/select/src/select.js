import Autocomplete from '@material-ui/lab/Autocomplete';
import Listbox from './listbox';
import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { matchSorter } from 'match-sorter';
import useStyles from './styles';

const getObjectOptionLabel = (option) => option.label;
const renderObjectOption = (option) => (
    <Typography data-cy={option.label.toLowerCase().split(' ').join('-')} noWrap>
        {option.label}
    </Typography>
);

const getStringOptionLabel = (option) => option;
const renderStringOption = (option) => (
    <Typography data-cy={option.toLowerCase().split(' ').join('-')} noWrap>
        {option}
    </Typography>
);

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
    const classes = useStyles();

    const hasStringOptions = options && typeof options[0] === 'string';
    const matchOptions = hasStringOptions ? undefined : { keys: props.filterKeys };

    const getOptionLabel = hasStringOptions ? getStringOptionLabel : getObjectOptionLabel;
    const defaultRenderOption = hasStringOptions ? renderStringOption : renderObjectOption;

    return (
        <Autocomplete
            autoHighlight
            autoSelect
            id='select'
            style={{ width: '100%' }}
            classes={classes}
            disableListWrap
            filterOptions={(options, { inputValue }) => {
                const filtered = matchSorter(options, inputValue, matchOptions);

                if (inputValue !== '' && props.onAddNew && filtered.length === 0) {
                    const addNewOption = {
                        inputValue: inputValue,
                        label: `+ Add ${inputValue}`,
                    };

                    filtered.push(hasStringOptions ? addNewOption.label : addNewOption);
                }

                return filtered;
            }}
            getOptionLabel={getOptionLabel}
            handleHomeEndKeys
            ListboxComponent={Listbox}
            ListboxProps={props}
            options={options}
            renderInput={(params) => (
                <TextField
                    {...params}
                    color={color}
                    error={error}
                    helperText={helperText}
                    InputProps={{
                        ...params.InputProps,
                        'data-cy': props.dataCy,
                    }}
                    size='small'
                    variant='outlined'
                    label={label}
                    fullWidth
                    required={required}
                />
            )}
            renderOption={renderOption || defaultRenderOption}
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
    error: false,
    hasAddNewOption: false,
    helperText: '',
    dataCy: undefined,
    filterKeys: ['label'],
    onAddNew: undefined,
    required: false,
};

Select.propTypes = {
    color: PropTypes.string,
    error: PropTypes.bool,
    onAddNew: PropTypes.func,
    helperText: PropTypes.string,
    dataCy: PropTypes.string,
    filterKeys: PropTypes.array,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    renderOption: PropTypes.func,
    required: PropTypes.bool,
    selectedOption: PropTypes.any,
};

export default Select;
