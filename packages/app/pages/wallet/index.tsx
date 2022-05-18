import React, { useState, useEffect } from 'react';
import { Window as KeplrWindow, Keplr } from "@keplr-wallet/types";
import { observer } from "mobx-react-lite"
import { Layout } from '../../components/layout';
import ChainList from '../../components/staking/ChainList';
import ConnectWallet from '../../components/wallet/ConnectWallet';
import ChooseChains from '../../components/rebalance/ChooseChains';
import chainStore, { ChainStore } from '../../store/chain-store';

declare global {
  interface Window extends KeplrWindow { }
}

function useKeplr(): [Keplr, React.Dispatch<React.SetStateAction<Keplr>>] {
  const [keplr, setKeplr] = useState<Keplr>(null);

  useEffect(() => {
    if (!window.keplr) {
      alert("Please install keplr extension");
    } else {
      setKeplr(window.keplr)
    }
  });

  return [keplr, setKeplr];
}

function useChain(
  keplr: Keplr,
  setKeplr: React.Dispatch<React.SetStateAction<Keplr>>,
  chainId: string
) {
  useEffect(() => {
    if (keplr != null) {
      keplr.enable(chainId)
        .then(() => {
          setKeplr(keplr);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }, [keplr, chainId]);
}

function useAddress(keplr: Keplr, chainId: string): string {
  const [address, setAddress] = useState<string>(null);

  useEffect(() => {
    if (keplr != null) {
      keplr.getKey(chainId)
        .then((key) => {
          setAddress(key.bech32Address);
        })
        .catch(e => {
          setAddress("There is no chain info for " + chainId);
          console.log(e);
        });
    }
  }, [keplr, chainId]);

  return address;
}

const IndexPage = observer(({ store }: { store: ChainStore }) => {
  const [keplr, setKeplr] = useKeplr()
  useChain(keplr, setKeplr, store.current.chain_id)
  const address = useAddress(keplr, store.current.chain_id)

  return (
    <Layout>
      <ChainList />
      <ChooseChains
        store={store} />
      <ConnectWallet
        address={address} />
    </Layout>
  );
});

export default () => <IndexPage store={chainStore} />;