import { formatNumberWithThousandSeparator, getLocation, getVariableDetail } from '@tractorzoom/equipment-attributes';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import { DateTime } from 'luxon';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import useStyles from './styles';

const EquipmentCard = (props) => {
    const classes = useStyles();
    const saleDate = props.saleDate ? props.saleDate : props.auctionDate;
    const formattedDate = DateTime.fromISO(saleDate).toLocaleString();
    const isSelected = props.selectedEquipmentSet.has(props.id);
    const variableDetail = getVariableDetail(props);
    const variableDetailStyle = variableDetail.length >= 18 ? { fontSize: 14 } : {};

    const handleToggleSelected = (event) => {
        props.handleEquipmentSelected();
        event.stopPropagation();
    };

    return (
        <Card
            className={clsx(classes.root, {
                [classes.selectedCard]: isSelected,
            })}
            data-cy='equipment-card'
            data-guid={props.id}
            style={props.style}
            variant='outlined'
        >
            <CardActionArea
                data-tour={props.shouldHaveDataTour ? 'equipment-card-action-area' : ''}
                onClick={props.handleOpen}
            >
                <IconButton
                    aria-label='select equipment'
                    className={isSelected ? classes.checkedButton : classes.selectButton}
                    color='primary'
                    data-cy='equipment-card-toggle-selection-button'
                    data-tour={props.shouldHaveDataTour ? 'equipment-card-select-equipment' : ''}
                    onClick={handleToggleSelected}
                    title={isSelected ? 'Remove from custom average' : 'Add to custom average'}
                >
                    {isSelected ? <CheckRoundedIcon fontSize='large' /> : <AddRoundedIcon fontSize='large' />}
                </IconButton>
                <CardMedia
                    className={classes.media}
                    component='img'
                    data-cy='equipment-card-image'
                    onError={(e) => {
                        e.target.onerror = null;

                        if (e.target.src === props.makeImageUrl || !props.makeImageUrl) {
                            e.target.src = '/img/nopicture.png';
                        } else {
                            e.target.src = props.makeImageUrl;
                        }
                    }}
                    src={props.imageUrl}
                    title='Equipment Image'
                />
                <CardContent classes={{ root: classes.cardContent }}>
                    <Typography
                        className={classes.makeModelTitle}
                        component='h2'
                        data-cy='equipment-card-make-model'
                        variant='h5'
                    >
                        {`${props.year ? `${props.year} ` : ''}${props.make} ${props.model}`}
                    </Typography>
                    <div className={classes.details}>
                        <div data-cy='equipment-card-variable-detail'>
                            {variableDetail.split('/').map((detail) => (
                                <Typography className={classes.variableDetail} style={variableDetailStyle}>
                                    {detail}
                                </Typography>
                            ))}
                        </div>

                        <Typography className={classes.price} data-cy='equipment-card-price'>
                            {`$${formatNumberWithThousandSeparator(`${props.price}`)}`}
                        </Typography>
                    </div>
                    <Divider />
                    <div className={classes.locationAndSaleDate}>
                        <Typography className={classes.detailsText} data-cy='equipment-card-location'>
                            <LocationOnIcon style={{ height: 16, marginBottom: -2, width: 16 }} />
                            {getLocation(props)}
                        </Typography>
                        <Typography className={classes.detailsText} data-cy='equipment-card-sale-date'>
                            Sold {formattedDate}
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

EquipmentCard.defaultProps = {
    auctionDate: '',
    distance: null,
    imageUrl: '',
    saleDate: '',
    shouldHaveDataTour: false,
    year: null,
};

EquipmentCard.propTypes = {
    auctionDate: PropTypes.string,
    distance: PropTypes.number,
    handleOpen: PropTypes.func.isRequired,
    handleEquipmentSelected: PropTypes.func.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    imageUrl: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    makeImageUrl: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    saleDate: PropTypes.string,
    selectedEquipmentSet: PropTypes.object.isRequired,
    shouldHaveDataTour: PropTypes.bool,
    state: PropTypes.string,
    style: PropTypes.object,
    year: PropTypes.number,
};

export default EquipmentCard;
