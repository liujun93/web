import { makeAutoObservable } from "mobx"
import { chains, assets } from '@cosmology/cosmos-registry'

export interface Chain {
    chain_id: string;
    chain_name: string;
    pretty_name: string;
    logo_URIs: {
        png: string;
        svg?: string;
    };
}

export class ChainStore {
    chainList: Chain[];
    current: Chain;

    constructor() {
        makeAutoObservable(this);
        this.chainList = chains.map(({ chain_id, chain_name, pretty_name }) => {
            let chain = {
                chain_id,
                chain_name,
                pretty_name,
                logo_URIs: null,
            };
            const options = assets.filter(v => v.chain_id === chain_id);
            if (options.length > 0) {
                chain.logo_URIs = options[0].assets[0].logo_URIs
            }
            return chain;
        });
        this.setCurrent("osmosis-1");
    }

    setCurrent(chain_id: string) {
        const options = this.chainList.filter(v => v.chain_id === chain_id);
        if (options.length > 0) {
            this.current = options[0]
        } else {
            alert("Chain id" + chain_id + " not Found!")
        }
    }
}

export default new ChainStore();