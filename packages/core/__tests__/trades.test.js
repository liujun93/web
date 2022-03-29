// @ts-nocheck
import cases from 'jest-in-case';
import { BlockchainStore } from '../src/store';

const store = new BlockchainStore();

it('works', async () => {
  store.addTransaction('memo1', 0);
  store.addTransaction('memo2', 0);
  console.log(JSON.stringify(store.transactions, null, 2));
});
