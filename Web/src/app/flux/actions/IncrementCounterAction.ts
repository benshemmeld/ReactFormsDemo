import { Action } from "./Action"

export class IncrementCounterAction extends Action {
    constructor(amount : number) {
        super();
        this._amount = amount;
    }

    private _amount : number;

    Amount() : number {
        return this._amount;
    }
}