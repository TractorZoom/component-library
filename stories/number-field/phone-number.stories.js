import NumberField from '../../packages/number-field/src';
import React, { useState } from 'react';
import propsMarkdown from '../utilities/props/number-field.md';
import { storiesOf } from '@storybook/react';

storiesOf('Number Field', module).add(
    'Phone Number',
    () => {
        const [value, setValue] = useState('');

        const onChange = (e) => {
            setValue(e.target.value);
        };

        return (
            <NumberField
                autoFocus={false}
                error={false}
                helperText='Ohhhh noooo'
                format='(###) ###-####'
                label='Phone Number'
                name='number-field'
                onChange={onChange}
                value={value}
            />
        );
    },
    {
        notes: { markdown: propsMarkdown },
    }
);
