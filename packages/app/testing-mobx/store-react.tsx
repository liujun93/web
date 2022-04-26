import React, { useEffect } from 'react';
import { createContext, useContext, FC } from "react";
import { BlockchainStore } from './store';

// we won't use the default new BlockchainStore(), but this makes TS happy
const StoreContext = createContext<BlockchainStore>(new BlockchainStore());

export const StoreProvider: FC<{ store: BlockchainStore }> = ({ store, children }) => {
    useEffect(() => {
        const interval = setInterval(() => {
            store.writeBlock();
        }, 5000);
        return () => clearInterval(interval);
    }, [store]);
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
    return useContext(StoreContext);
}
