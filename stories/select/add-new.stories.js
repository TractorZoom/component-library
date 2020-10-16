import Select from '../../packages/select/src';
import React from 'react';
import propsMarkdown from '../utilities/props/select.md';
import { makeStyles } from '@material-ui/core/styles';
import { storiesOf } from '@storybook/react';

const useStyles = makeStyles({
    container: {
        backgroundColor: '#6c757d',
        padding: 20,
    },
});

storiesOf('Select', module).add(
    'With add new',
    () => {
        const classes = useStyles();
        const [value, setValue] = React.useState('');

        let options = [];

        let i = 0;
        while (i < 10) {
            options.push(`${i}`);
            i++;
        }

        const onChange = (event, value) => {
            if (value) {
                setValue(value);
            } else {
                setValue('');
            }
        };

        return (
            <div className={classes.container}>
                <Select
                    darkMode
                    label='Virtualized Select'
                    onChange={onChange}
                    onAddNew={(addNew) => console.log('on add new: ', addNew)}
                    options={options}
                    selectedOption={value}
                />
            </div>
        );
    },
    {
        notes: { markdown: propsMarkdown },
    }
);
