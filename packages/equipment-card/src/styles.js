import { makeStyles } from '@material-ui/core/styles';

const iconButton = (theme) => ({
    padding: theme.spacing(1),
    position: 'absolute',
    right: 18,
    top: 176,
});

export default makeStyles((theme) => ({
    auctionDetailsText: {
        fontSize: 10,
        fontWeight: 600,
    },
    canvas: {
        display: 'none',
    },
    cardContent: {
        padding: theme.spacing(5),
        paddingBottom: theme.spacing(2),
    },
    cardHolder: {
        position: 'relative',
    },
    checkedButton: {
        ...iconButton(theme),
        '&:hover': {
            backgroundColor: theme.palette.success.main,
        },
        backgroundColor: theme.palette.success.main,
        color: theme.palette.common.white,
        'pointer-events': 'all',
    },
    details: {
        alignItems: 'center',
        display: 'flex',
        fontSize: theme.spacing(4),
        justifyContent: 'space-between',
        marginBottom: theme.spacing(-1),
    },
    detailsText: {
        color: '#4C4C4C',
        fontSize: 12,
        marginTop: theme.spacing(2),
    },
    divider: {
        background: '#CFD2D7',
    },
    locationAndSaleDate: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    lozenge: {
        paddingBottom: 2,
        paddingTop: 2,
        color: '#045C3E',
        backgroundColor: '#DFFCED',
        fontWeight: 600,
        fontSize: 10,
        borderRadius: 2,
        padding: '1px 2px 1px 2px',
    },
    makeModelTitle: {
        fontSize: 14,
    },
    media: {
        height: 200,
    },
    price: {
        color: theme.palette.success.main,
        fontSize: theme.spacing(4),
        fontSize: 22,
        fontWeight: 500,
    },
    primaryDetail: {
        fontSize: 22,
        fontWeight: 500,
    },
    root: {
        border: '1px solid #CFD2D7',
        borderRadius: 5,
        marginBottom: theme.spacing(2),
        minWidth: 275,
        '&:hover': {
            borderColor: '#BEBEBE',
        },
    },
    secondaryDetail: {
        color: theme.palette.text.secondary,
        fontSize: 14,
        fontWeight: 500,
        paddingBottom: 10,
    },
    selectButton: {
        ...iconButton(theme),
        '&:hover': {
            backgroundColor: theme.palette.common.white,
            color: '#184EAC',
        },
        backgroundColor: theme.palette.common.white,
        border: '1px solid #CFD2D7',
        'pointer-events': 'all',
    },
    selectedCard: {
        border: `3px solid ${theme.palette.success.main}`,
        '&:hover': {
            borderColor: theme.palette.success.main,
        },
    },
    variableDetail: {
        fontSize: theme.spacing(4),
        fontWeight: 'bold',
    },
}));
