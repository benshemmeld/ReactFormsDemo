import Dispatcher from '../Dispatcher'

export class Action {

    public Dispatch() {
        Dispatcher.dispatch(this);
    }
}