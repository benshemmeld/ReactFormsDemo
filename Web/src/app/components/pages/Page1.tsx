import * as React from 'react';
import { UserDetails } from '../UserDetails';
import { IGitHubUser } from '../../interfaces/IGitHubUser';
import { UpdateUserAction, IncrementCounterAction } from '../../flux/actions/Index'
import { testStore } from '../../flux/stores/Index';

import axios from 'axios';

interface IProps extends React.Props<Page1> {
}

interface IState {
    user: IGitHubUser,
    count: number,
    incrementAmount: number
}

export class Page1 extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = { count: 0, incrementAmount: 1, user: undefined };
    }

    componentDidMount() {
        
        testStore.on("change", () => {
            this.setState({ user: testStore.getUser(), count: testStore.getCounter() })
        })

        this.loadUser("benshemmeld");
    }

    componentWillUnmount() {
        testStore.removeAllListeners();
    }

    loadUser(username: string): void {
        axios.get<IGitHubUser>('https://api.github.com/users/' + username)
            .then(response => {
                const updateUserAction = new UpdateUserAction(response.data);
                updateUserAction.Dispatch();
            });
    }

    incrementCounter(): void {

        var action = new IncrementCounterAction(this.state.incrementAmount);
        action.Dispatch();
    }

    changeIncrementAmount(value: string): void {
        var amount = parseInt(value);
        if (isNaN(amount)) {
            amount = 0
        }
        this.setState({ incrementAmount: amount });
    }

    render() {
        return <>
            <h1>This is Page 1</h1>
            <UserDetails user={this.state.user} />
            <span>Counter: {testStore.getCounter()}</span><br />
            <button className="btn" onClick={e => this.incrementCounter()}>Increment Counter</button><br />
            <div className="col-sm-4">
                <input className="form-control" type="text" defaultValue={this.state.incrementAmount.toString()} onChange={e => this.changeIncrementAmount(e.target.value)} />
            </div>
        </>
    }
}