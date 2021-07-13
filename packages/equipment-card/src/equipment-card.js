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
import Lozenge from '@tractorzoom/lozenge';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import useStyles from './styles';
import { useInView } from 'react-intersection-observer';

const EquipmentCard = (props) => {
    const canvasRef = useRef(null);
    const classes = useStyles();
    const getImageUrl = (url) => {
        if (url) {
            if (url.indexOf('http') >= 0) {
                return url.replace('tz-prod.s3.amazonaws.com', 's3.tractorzoom.com');
            }

            return `https://s3.tractorzoom.com/${url}`;
        }

        return '';
    };
    const defaultImageUrl = props.imageUrl
        ? getImageUrl(props.imageUrl)
        : props.makeImageUrl
        ? getImageUrl(props.makeImageUrl)
        : '/img/nopicture.png';
    const [imageUrl, setImageUrl] = useState(defaultImageUrl);

    const isSold = props.price > 0;

    const saleDate = props.saleDate ? props.saleDate : props.auctionDate;
    const formattedDate = DateTime.fromISO(saleDate).toLocaleString();
    const auctionDate = DateTime.fromISO(saleDate);
    const formattedAuctionDate = auctionDate.toFormat('MMM d');
    const formattedPrice = `$${formatNumberWithThousandSeparator(`${props.price}`)}`;
    const isSelected = props.selectedEquipmentSet && props.selectedEquipmentSet.has(props.id);
    const attr = getTopAttributesForCategory(props.category);
    const { ref, inView } = useInView({
        threshold: 0.7,
    });
    const [hasBeenSeen, setHasBeenSeen] = useState(false);
    let styles = props.style;

    useEffect(() => {
        if (props.onVisible && inView && !hasBeenSeen) {
            setHasBeenSeen(true);
            props.onVisible(inView);
        }
    }, [props.onVisible, inView, hasBeenSeen]);

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

    const imageError = (e) => {
        e.target.onerror = null;

        if (imageUrl === getImageUrl(props.makeImageUrl) || !props.makeImageUrl) {
            setImageUrl('https://s3.tractorzoom.com/img/nopicture.png');
        } else {
            setImageUrl(getImageUrl(props.makeImageUrl));
        }
    };

    const NextImage = () => {
        return (
            <props.imageComponent
                onError={imageError}
                height={200}
                width={300}
                objectFit='cover'
                src={imageUrl}
            ></props.imageComponent>
        );
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
                ref={ref}
            >
                <CardActionArea
                    data-tour={props.shouldHaveDataTour ? 'equipment-card-action-area' : ''}
                    onClick={props.handleOpen}
                >
                    <CardMedia
                        alt='Equipment Image'
                        className={classes.media}
                        component={props.imageComponent ? NextImage : 'img'}
                        data-cy='equipment-card-image'
                        onError={imageError}
                        src={imageUrl}
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
                            {!isSold && (
                                <Lozenge style={{ margin: 4 }} color='#045C3E' backgroundColor='#DFFCED'>
                                    AUCTION
                                </Lozenge>
                            )}
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
    imageComponent: PropTypes.object,
    imageUrl: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    makeImageUrl: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    onVisible: PropTypes.func,
    price: PropTypes.number,
    saleDate: PropTypes.string,
    selectedEquipmentSet: PropTypes.object,
    shouldHaveDataTour: PropTypes.bool,
    state: PropTypes.string,
    style: PropTypes.object,
    year: PropTypes.number,
};

export default EquipmentCard;
