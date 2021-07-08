import Button from '@material-ui/core/Button';
import Link from 'next/link';
import React from 'react';

export default () => {
    return (
        <div
            style={{
                margin: '40px auto',
                maxWidth: 800,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Link href='/basic-dialog'>
                <Button variant='contained'>@tractorzoom/basic-dialog</Button>
            </Link>
            <Link href='/button'>
                <Button variant='contained'>@tractorzoom/button</Button>
            </Link>
            <Link href='/chip'>
                <Button variant='contained'>@tractorzoom/chip</Button>
            </Link>
            <Link href='/equipment-card'>
                <Button variant='contained'>@tractorzoom/equipment-card</Button>
            </Link>
            <Link href='/lozenge'>
                <Button variant='contained'>@tractorzoom/lozenge</Button>
            </Link>
            <Link href='/places-select'>
                <Button variant='contained'>@tractorzoom/places-select</Button>
            </Link>
            <Link href='/radio'>
                <Button variant='contained'>@tractorzoom/radio</Button>
            </Link>
            <Link href='/simple-select'>
                <Button variant='contained'>@tractorzoom/simple-select</Button>
            </Link>
            <Link href='/text-field'>
                <Button variant='contained'>@tractorzoom/text-field</Button>
            </Link>
            <Link href='/theme'>
                <Button variant='contained'>@tractorzoom/theme</Button>
            </Link>
        </div>
    );
};
