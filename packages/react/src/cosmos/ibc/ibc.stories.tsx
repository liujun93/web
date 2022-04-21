import React from 'react';
import { storiesOf } from '@storybook/react';
import DepositSimple from './DepositSimple';
import DepositTokens from './DepositTokens';
import IbcList from './IbcList';
import WithdrawSimple from './WithdrawSimple';
import WithdrawTokens from './WithdrawTokens';

storiesOf('Cosmology/ibc', module).add('DepositSimple', () => {
    return (
        <DepositSimple />
    );
});

storiesOf('Cosmology/ibc', module).add('DepositTokens', () => {
    return (
        <DepositTokens />
    );
});


storiesOf('Cosmology/ibc', module).add('IbcList', () => {
    return (
        <IbcList />
    );
});


storiesOf('Cosmology/ibc', module).add('WithdrawSimple', () => {
    return (
        <WithdrawSimple />
    );
});


storiesOf('Cosmology/ibc', module).add('WithdrawTokens', () => {
    return (
        <WithdrawTokens />
    );
});

