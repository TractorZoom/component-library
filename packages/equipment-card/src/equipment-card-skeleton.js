import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import useStyles from './styles';

const EquipmentCardSkeleton = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.cardHolder} style={{ ...props.style }}>
            <Card className={classes.root} variant='outlined'>
                <Skeleton variant='rect' width='100%' height={200} />
                <Box className={classes.cardContent}>
                    <Skeleton height={16} width='80%' marginBottom={12} />
                    <Box display='flex' flexDirection='row' justifyContent='space-between'>
                        <Skeleton height={32} width='50%' style={{ marginTop: 8 }} />
                        <Skeleton height={32} width='20%' style={{ marginTop: 8 }} />
                    </Box>
                    <Skeleton height={16} width='30%' style={{ marginBottom: 16 }} />
                    <Divider className={classes.divider} />
                    <Skeleton height={12} width='50%' style={{ marginTop: 8 }} />
                    <Skeleton height={12} width='30%' />
                </Box>
            </Card>
        </div>
    );
};

export default EquipmentCardSkeleton;
