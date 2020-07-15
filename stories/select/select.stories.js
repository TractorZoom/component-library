import Select from '../../packages/select/src';
import React from 'react';
import propsMarkdown from '../utilities/props/select.md';
import { storiesOf } from '@storybook/react';

storiesOf('Select', module).add(
    'Select with 10000 options',
    () => {
        const [value, setValue] = React.useState('');

        let options = [];

        let i = 0;
        while (i < 10000) {
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

        return <Select label='Virtualized Select' onChange={onChange} options={options} selectedOption={value} />;
    },
    {
        notes: { markdown: propsMarkdown },
    }
);
