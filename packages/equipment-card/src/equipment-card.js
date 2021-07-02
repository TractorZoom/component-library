import {
    formatNumberWithThousandSeparator,
    getLocation,
    getTopAttributesForCategory,
} from '@tractorzoom/equipment-attributes';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { Box } from '@material-ui/core';
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
import React, { useRef } from 'react';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import useStyles from './styles';

const EquipmentCard = (props) => {
    const canvasRef = useRef(null);
    const classes = useStyles();

    const isSold = props.price > 0;

    const saleDate = props.saleDate ? props.saleDate : props.auctionDate;
    const formattedDate = DateTime.fromISO(saleDate).toLocaleString();
    const auctionDate = DateTime.fromISO(saleDate);
    const formattedAuctionDate = auctionDate.toFormat('MMM d');
    const formattedPrice = `$${formatNumberWithThousandSeparator(`${props.price}`)}`;
    const isSelected = props.selectedEquipmentSet.has(props.id);

    const attr = getTopAttributesForCategory(props.category);

    let styles = props.style;
    if (!props.handleOpen) {
        styles = { ...styles, pointerEvents: 'none' };
    }
    const handleToggleSelected = (event) => {
        props.handleEquipmentSelected();
        event.stopPropagation();
    };

    const primaryDetail = !props[attr[0].name] && props[attr[1]?.name] ? attr[1] : attr[0];
    const secondaryDetail = primaryDetail === attr[1] ? undefined : attr[1];
    const getSecondaryText = () => {
        let name = '\u00a0';

        if (props[secondaryDetail?.name]) {
            name = formatNumberWithThousandSeparator(props[secondaryDetail.name]) + ' ' + secondaryDetail?.shortName;
        }

        return name;
    };
    const getImageUrl = (url) => {
        if (url) {
            if (url.indexOf('http') >= 0) {
                return url;
            }

            return `https://tz-prod.s3.amazonaws.com/${url}`;
        }

        return '';
    };

    return (
        <div className={classes.cardHolder}>
            <canvas className={classes.canvas} ref={canvasRef}></canvas>
            <Card
                className={clsx(classes.root, {
                    [classes.selectedCard]: isSelected,
                })}
                data-cy='equipment-card'
                data-guid={props.id}
                style={styles}
                variant='outlined'
            >
                <CardActionArea
                    data-tour={props.shouldHaveDataTour ? 'equipment-card-action-area' : ''}
                    onClick={props.handleOpen}
                >
                    <CardMedia
                        alt='Equipment Image'
                        className={classes.media}
                        component='img'
                        data-cy='equipment-card-image'
                        onError={(e) => {
                            e.target.onerror = null;

                            if (e.target.src === getImageUrl(props.makeImageUrl) || !props.makeImageUrl) {
                                e.target.src = '/img/nopicture.png';
                            } else {
                                e.target.src = getImageUrl(props.makeImageUrl);
                            }
                        }}
                        src={
                            props.imageUrl
                                ? getImageUrl(props.imageUrl)
                                : props.makeImageUrl
                                ? getImageUrl(props.makeImageUrl)
                                : '/img/nopicture.png'
                        }
                        title='Equipment Image'
                    />
                    <CardContent classes={{ root: classes.cardContent }}>
                        <Box
                            display='flex'
                            justifyContent='space-between'
                            alignItems='center'
                            style={{ marginBottom: 4 }}
                        >
                            <Typography
                                className={classes.makeModelTitle}
                                component='h2'
                                data-cy='equipment-card-make-model'
                                variant='h5'
                            >
                                {`${props.year ? `${props.year} ` : ''}${props.make} ${props.model}`}
                            </Typography>
                            {!isSold && <div className={classes.lozenge}>AUCTION</div>}
                        </Box>

                        <div className={classes.details}>
                            <div data-cy='equipment-card-variable-detail'>
                                <Typography className={classes.primaryDetail}>
                                    {props[primaryDetail.name]
                                        ? formatNumberWithThousandSeparator(props[primaryDetail.name])
                                        : '---'}{' '}
                                    {primaryDetail.shortName}
                                </Typography>
                            </div>
                            <Typography className={classes.price} data-cy='equipment-card-price'>
                                {isSold ? formattedPrice : formattedAuctionDate}
                            </Typography>
                        </div>
                        <Typography className={classes.secondaryDetail}>{getSecondaryText()}</Typography>
                        <Divider className={classes.divider} />
                        <div className={classes.locationAndSaleDate}>
                            {isSold ? (
                                <>
                                    <Typography className={classes.auctionDetailsText}>
                                        {getLocation(props, true)}
                                    </Typography>
                                    <Typography className={classes.auctionDetailsText} style={{ color: '#0E1C3699' }}>
                                        Sold {formattedDate}
                                    </Typography>
                                </>
                            ) : (
                                <Box display='flex' flexDirection='column'>
                                    <Typography className={classes.auctionDetailsText}>{props.auctioneer}</Typography>
                                    <Typography className={classes.auctionDetailsText} style={{ color: '#0E1C3699' }}>
                                        {getLocation(props, true)}
                                    </Typography>
                                </Box>
                            )}
                        </div>
                    </CardContent>
                </CardActionArea>
                {!!props.handleEquipmentSelected && (
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
                )}
            </Card>
        </div>
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
    handleOpen: PropTypes.func,
    handleEquipmentSelected: PropTypes.func,
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
