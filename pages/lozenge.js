import Lozenge from '../packages/lozenge/src';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const LozengeExamples = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '40px auto',
                maxWidth: 800,
            }}
        >
            <Typography style={{ textAlign: 'center' }} variant='h4'>
                @tractorzoom/lozenge
            </Typography>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    margin: 10,
                    justifyContent: 'center',
                }}
            >
                <Lozenge style={{ margin: 4 }} color='#045C3E' backgroundColor='#DFFCED'>
                    AUCTION
                </Lozenge>
            </div>
        </div>
    );
};

export default LozengeExamples;
