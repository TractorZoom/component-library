import React, { useState } from 'react';
import SimpleSelect from '../packages/simple-select/src/index';
import Typography from '@material-ui/core/Typography';

const SimpleSelectExamples = () => {
    const [withStringOptionsValue, setWithStringOptionsValue] = useState('');
    const stringOptions = ['ft', 'in'];

    const [withObjectOptionsValue, setWithObjectOptionsValue] = useState('');
    const objectOptions = [
        { value: '1', label: 'Tractor' },
        { value: '2', label: 'Zoom' },
    ];

    const onChange = (setterFunc) => (event) => {
        setterFunc(event.target.value);
    };

    return (
        <div
            style={{
                margin: '40px auto',
                maxWidth: 800,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Typography style={{ textAlign: 'center' }} variant='h4'>
                @tractorzoom/simple-select
            </Typography>
            <SimpleSelect
                helperText='No Label'
                options={stringOptions}
                onChange={onChange(setWithStringOptionsValue)}
                style={{ marginTop: 20 }}
                value={withStringOptionsValue}
            />
            <SimpleSelect
                disabled
                helperText='Disabled'
                label='Select String Option'
                options={stringOptions}
                onChange={onChange(setWithStringOptionsValue)}
                style={{ marginTop: 20 }}
                value={withStringOptionsValue}
            />
            <SimpleSelect
                helperText={!!withObjectOptionsValue ? `You Selected: ${withObjectOptionsValue}` : 'Select an Option'}
                label='Select Object Option'
                options={objectOptions}
                onChange={onChange(setWithObjectOptionsValue)}
                style={{ marginTop: 20 }}
                value={withObjectOptionsValue}
            />
            <SimpleSelect
                error
                helperText='Errored'
                label='Select Option'
                options={objectOptions}
                onChange={onChange(setWithObjectOptionsValue)}
                style={{ marginTop: 20 }}
                value={withObjectOptionsValue}
            />
        </div>
    );
};

export default SimpleSelectExamples;
