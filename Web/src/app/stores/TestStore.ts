import * as Events from 'events';
import dispatcher from '../flux/Dispatcher';
import Action, { IncrementCounterAction, UpdateUserAction } from '../flux/Action'
import { IGitHubUser } from '../IGitHubUser';

class TestStore extends Events.EventEmitter {

    private _user: IGitHubUser;
    private _counter: number;

    constructor() {
        super();
        this._counter = 0;
    }

    getCounter(): number {
        return this._counter;
    }

    getUser(): IGitHubUser {
        return this._user;
    }

    handleAction(action: Action) {
        if (action instanceof IncrementCounterAction) {
            this.incrementCounter(action.Amount());
        }

        if (action instanceof UpdateUserAction) {
            this._user = action.User();
            this.emit("change");
        }

    }

    private incrementCounter(incrementAmount: number) {
        this._counter += incrementAmount;
        this.emit("change");
    }
}

const testStore = new TestStore();
dispatcher.register(testStore.handleAction.bind(testStore));
export default testStore;