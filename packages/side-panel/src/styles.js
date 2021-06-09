import { makeStyles } from '@material-ui/core/styles';

const paper = {
    width: 300,
    top: 'unset',
    borderRight: 'none',
    padding: 20,
    paddingTop: 0,
};

const useStyles = makeStyles((theme) => ({
    closeButton: {
        marginLeft: 'auto',
    },
    drawer: {
        width: paper.width,
        flexShrink: 0,
    },
    drawerHeader: {
        alignItems: 'center',
        background: 'inherit',
        display: 'flex',
        flexShrink: 0,
        padding: theme.spacing(0, 1),
        position: 'sticky',
        justifyContent: 'flex-end',
        top: 0,
        zIndex: 999,
    },
    drawerMobile: {
        width: '100vw',
        flexShrink: 0,
    },
    drawerPaper: {
        ...paper,
    },
    drawerPaperMobile: {
        ...paper,
        width: '100vw',
    },
    headerDivider: {
        position: 'sticky',
        top: 48,
        zIndex: 999,
    },
    icon: {
        display: 'block',
        margin: 'auto',
        marginLeft: 5,
    },
    root: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.secondary,
    },
    toggleOpenButton: {
        borderRadius: '0px 40px 40px 0px',
        display: 'flex',
        height: 50,
        marginTop: 5,
        width: 40,
    },
}));

export default useStyles;
