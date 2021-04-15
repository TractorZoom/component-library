import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    activeLabel: {
        color: theme.palette.primary.main,
    },
    chevronIcon: {
        right: 12,
    },
    error: {
        border: `2px solid ${theme.palette.error.main} !important`,
    },
    focused: {
        border: `2px solid ${theme.palette.primary.main} !important`,
    },
    input: {
        backgroundColor: `${theme.palette.action.active} !important`,
        border: `2px solid transparent`,
        borderRadius: 8,
        '&:hover': {
            backgroundColor: `${theme.palette.action.hover} !important`,
        },
    },
}));

export default useStyles;
