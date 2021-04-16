import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    activeLabel: {
        color: theme.palette.primary.main,
    },
    adornedEnd: {
        paddingRight: 0,
    },
    clearIcon: {
        color: '#989898',
    },
    error: {
        border: `2px solid ${theme.palette.error.main} !important`,
    },
    errorIcon: {
        color: theme.palette.error.main,
        margin: 12,
    },
    focused: {
        border: `2px solid ${theme.palette.primary.main} !important`,
    },
    input: {
        backgroundColor: 'rgba(0, 0, 0, 0.05) !important',
        border: `2px solid transparent`,
        borderRadius: 8,
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.08) !important',
        },
    },
    optionsSelect: {
        width: 74,
    },
    optionsInput: {
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    optionsSelectInput: {
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
    },
    optionsSelectLabel: {
        fontSize: 12,
        padding: `19px 12px 18px`,
    },
    optionsTextField: {
        flexGrow: 1,
    },
    suffixLabel: {
        fontSize: '1.5rem',
        margin: 18,
    },
}));

export default useStyles;
