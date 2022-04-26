import React, { FC } from 'react';
import { useStore } from '../../testing-mobx/store-react';
import { observer } from 'mobx-react-lite';
import { NoneFound } from './NoneFound';
import { TxTable } from './TxTable';
import { TxForm } from './TxForm';

export const Transactions: FC = observer(() => {
    const store = useStore();
    if (!store.transactions.length) {
        return (
            <>
                <TxForm />
                <NoneFound />
                <Blocks />
            </>
        );
    }
    return (
        <>
            <TxForm />
            <TxTable transactions={store.transactions} />
            <Blocks />
        </>
    );
});

export const BlocksTitle: FC = observer(() => {
    const store = useStore();
    return (
        <h1>
            {store.numberBlocks} Blocks
        </h1>
    )
});

export const Blocks: FC = observer(() => {
    const store = useStore();
    return (
        <>
            <BlocksTitle />
            {store.blocks.map(block => {
                return (
                    <TxTable transactions={block.transactions} />
                );
            })}
        </>
    )
});
