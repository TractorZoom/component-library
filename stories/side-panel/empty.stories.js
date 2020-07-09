import SidePanel from '../../packages/side-panel/src';
import React from 'react';
import propsMarkdown from '../utilities/props/side-panel.md';
import { storiesOf } from '@storybook/react';

storiesOf('Side Panel', module).add('Empty Side Panel', () => <SidePanel />, {
    notes: { markdown: propsMarkdown },
});
