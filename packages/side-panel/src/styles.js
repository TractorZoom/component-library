import { makeStyles } from '@material-ui/core/styles';

const paper = {
    width: 300,
    backgroundColor: '#6c757d',
    top: 'unset',
    borderRight: 'none',
    padding: 20,
    paddingTop: 0,
};

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: paper.width,
        flexShrink: 0,
    },
    drawerHeader: {
        alignItems: 'center',
        display: 'flex',
        padding: theme.spacing(0, 1),
        justifyContent: 'flex-end',
    },
    drawerMobile: {
        width: '100vw',
        flexShrink: 0,
    },
    drawerPaper: paper,
    drawerPaperMobile: {
        ...paper,
        width: '100vw',
    },
    icon: {
        color: 'white',
        display: 'block',
        margin: 'auto',
        marginLeft: 5,
    },
    toggleOpenButton: {
        backgroundColor: '#6c757d',
        borderRadius: '0px 40px 40px 0px',
        display: 'flex',
        height: 50,
        marginTop: 5,
        width: 40,
    },
}));

export default useStyles;
