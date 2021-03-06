import { makeStyles } from '@material-ui/core/styles';

const materialTextFieldDefaultPadding = '27px 12px 10px';

const useStyles = makeStyles((theme) => ({
    activeLabel: {
        color: theme.palette.primary.main,
    },
    adornedEnd: {
        padding: `0 !important`,
    },
    chevronIcon: {
        marginRight: theme.spacing(3),
    },
    error: {
        border: `2px solid ${theme.palette.error.main} !important`,
    },
    focused: {
        border: `2px solid ${theme.palette.primary.main} !important`,
    },
    icon: {
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(2),
    },
    input: {
        backgroundColor: 'rgba(0, 0, 0, 0.05) !important',
        border: `2px solid transparent`,
        borderRadius: 8,
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.08) !important',
        },
    },
    nativeInput: {
        padding: `${materialTextFieldDefaultPadding} !important`,
    },
}));

export default useStyles;
