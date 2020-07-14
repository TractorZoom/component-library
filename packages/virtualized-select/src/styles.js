import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    listbox: {
        boxSizing: 'border-box',
        '& ul': {
            padding: 0,
            margin: 0,
        },
    },
});

export default useStyles;
