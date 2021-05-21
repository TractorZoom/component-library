import { makeStyles } from '@material-ui/core/styles';

const iconButton = (theme) => ({
    padding: theme.spacing(1),
    position: 'absolute',
    right: 18,
    top: 176,
});

export default makeStyles((theme) => ({
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
            backgroundColor: theme.palette.success.dark,
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
        marginTop: theme.spacing(1),
        paddingBottom: theme.spacing(3),
    },
    detailsText: {
        color: '#4C4C4C',
        fontSize: 12,
        marginTop: theme.spacing(2),
    },
    locationAndSaleDate: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    makeModelTitle: {
        fontSize: 14,
        marginBottom: theme.spacing(2),
    },
    media: {
        height: 200,
    },
    price: {
        color: theme.palette.success.dark,
        fontSize: theme.spacing(4),
        fontWeight: 'bold',
    },
    root: {
        border: '2px solid rgba(0, 0, 0, 0.12)',
        borderRadius: 15,
        marginBottom: theme.spacing(2),
        minWidth: 275,
        '&:hover': {
            borderColor: '#BEBEBE',
        },
    },
    selectButton: {
        ...iconButton(theme),
        '&:hover': {
            backgroundColor: theme.palette.common.white,
            color: '#184EAC',
        },
        backgroundColor: theme.palette.common.white,
        border: '2px solid rgba(0, 0, 0, 0.12)',
        'pointer-events': 'all',
    },
    selectedCard: {
        border: `3px solid ${theme.palette.success.main}`,
        '&:hover': {
            borderColor: theme.palette.success.dark,
        },
    },
    variableDetail: {
        fontSize: theme.spacing(4),
        fontWeight: 'bold',
    },
}));
