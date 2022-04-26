import { makeAutoObservable } from "mobx";
import { SHA256 } from "crypto-js";
import { getData } from "./api";

export interface IBlock {
    hash: String;
    transactions: Array<ITx>;
}

export interface ITx {
    hash: String;
    memo: String;
    created: Date
    status: Number
}
export class BlockchainStore {
    blocks: Array<IBlock> = [];
    transactions: Array<ITx> = [];

    constructor() {
        makeAutoObservable(this);
    }

    loadData = () => {
        getData().then(data => {
            this.transactions = data
        })
    }

    addTransaction(memo: string, status: number) {
        this.transactions.push({
            hash: SHA256(memo).toString(),
            memo,
            created: new Date(),
            status
        });
    }

    get numberBlocks() {
        return this.blocks.length;
    }

    writeBlock() {
        if (!this.transactions.length) return;

        const transactions = [...this.transactions];

        // LOL
        this.transactions = [];

        const prevBlock = this.blocks[this.blocks.length - 1] ?? { hash: "" };

        // my ghetto merkel tree...
        const str = prevBlock + JSON.stringify(this.transactions, null, 2)
        const hash = SHA256(str).toString();

        // new block
        this.blocks.push({
            hash,
            transactions: transactions
        });
    }
}

