import { SHA256 } from "crypto-js";
import { ITx } from "./store";

export const getData = () => {
    return new Promise<Array<ITx>>((resolve, reject) => {
        setTimeout(() => {
            resolve([{
                hash: SHA256('memo').toString(),
                memo: 'memo',
                created: new Date(),
                status: 0
            }]);
        }, 2300);
    });
}
