import { makeStyles } from '@material-ui/core/styles';

const loadingSpinner = {
    height: '24px !important',
    width: '24px !important',
};

const useStyles = makeStyles((theme) => ({
    loadingSpinner: {
        ...loadingSpinner,
        marginRight: theme.spacing(1),
    },
}));

export default useStyles;
