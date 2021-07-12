import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import useStyles from './styles';

const Lozenge = (props) => {
    const { backgroundColor, children, className, color, style } = props;
    const classes = useStyles();

    return (
        <div style={{ ...style, color, backgroundColor }} className={clsx(className, classes.lozenge)}>
            {children}
        </div>
    );
};

Lozenge.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
};

export default Lozenge;
