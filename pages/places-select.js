import React, { useState } from 'react';
import { PlacesSelect } from '../packages/places-select/src/index';
import Typography from '@material-ui/core/Typography';

const PlacesSelectExamples = () => {
    const [withAddress, setWithAddress] = useState({});

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
                @tractorzoom/places-select
            </Typography>
            <PlacesSelect
                address={withAddress}
                helperText='Default'
                setAddress={setWithAddress}
                style={{ marginTop: 20 }}
            />
            <PlacesSelect
                address={withAddress}
                disabled
                helperText='Disabled'
                setAddress={setWithAddress}
                style={{ marginTop: 20 }}
            />
            <PlacesSelect
                address={withAddress}
                error
                helperText='Errored'
                setAddress={setWithAddress}
                style={{ marginTop: 20 }}
            />
        </div>
    );
};

export default PlacesSelectExamples;
