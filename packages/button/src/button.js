import MuiButton from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import useButton from './hook';

const Button = (props) => {
    const { children, disabled, loading, loadingIcon, ...otherProps } = useButton(props);

    return (
        <MuiButton disabled={disabled || loading} {...otherProps}>
            {loadingIcon}
            {children}
        </MuiButton>
    );
};

Button.defaultProps = {
    className: '',
    loading: false,
    startIcon: null,
    variant: 'contained',
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    loading: PropTypes.bool,
    startIcon: PropTypes.node,
    variant: PropTypes.string,
};

export const PrimaryButton = (props) => <Button color='primary' {...props} />;
export const OutlineButton = (props) => <Button variant='outlined' {...props} />;
export const TextButton = (props) => <Button variant='text' color='primary' {...props} />;

export default Button;
