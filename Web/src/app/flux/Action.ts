import Dispatcher from './Dispatcher'
import { IGitHubUser } from '../IGitHubUser';


export default class Action {

    public Dispatch() {
        Dispatcher.dispatch(this);
    }
}

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

export class UpdateUserAction extends Action {
    constructor(user : IGitHubUser) {
        super();
        this._user = user;
    }

    private _user : IGitHubUser;

    User() : IGitHubUser {
        return this._user;
    }
}

export class LoadUserAction extends Action {
    constructor(username : string) {
        super();


    }
}

