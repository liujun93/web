import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import SwapTokens from './SwapTokens';

storiesOf('Cosmology/swap', module).add('SwapTokens', () => {
    return (
        <>
            <SwapTokens />
        </>
    );
});

