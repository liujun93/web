import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import AssetList from './AssetList';
import ChooseValidators from './ChooseValidators';
import Claim from './Claim';
import Delegate from './Delegate';
import ListValidators from './ListValidators';
import Redelegate from './Redelegate';
import Undelegate from './Undelegate';

storiesOf('Cosmology/staking', module).add('AssetList', () => {
    return (
        <AssetList />
    );
});

storiesOf('Cosmology/staking', module).add('ChooseValidators', () => {
    return (
        <ChooseValidators />
    );
});

storiesOf('Cosmology/staking', module).add('Claim', () => {
    return (
        <Claim />
    );
});

storiesOf('Cosmology/staking', module).add('Delegate', () => {
    return (
        <Delegate />
    );
});

storiesOf('Cosmology/staking', module).add('ListValidators', () => {
    return (
        <ListValidators />
    );
});

storiesOf('Cosmology/staking', module).add('Redelegate', () => {
    return (
        <Redelegate />
    );
});

storiesOf('Cosmology/staking', module).add('Undelegate', () => {
    return (
        <Undelegate />
    );
});

