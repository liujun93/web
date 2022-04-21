import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import ChooseBalance from './ChooseBalance';
import ChooseCoins from './ChooseCoins';
import ChoosePools from './ChoosePools';
import PendingJobs from './PendingJobs';

storiesOf('Cosmology/reinvest', module).add('ChooseBalance', () => {
    return (
        <ChooseBalance />
    );
});


storiesOf('Cosmology/reinvest', module).add('ChooseCoins', () => {
    return (
        <ChooseCoins />
    );
});


storiesOf('Cosmology/reinvest', module).add('ChoosePools', () => {
    const useSmallIcons = boolean('useSmallIcons', false);
    return (
        <ChoosePools useSmallIcons={useSmallIcons} />
    );
});


storiesOf('Cosmology/reinvest', module).add('PendingJobs', () => {
    return (
        <PendingJobs />
    );
});

