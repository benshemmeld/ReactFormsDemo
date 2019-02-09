import * as React from 'react';

interface IProps extends React.Props<Form> {
}

interface IState {
}

export class Form extends React.Component<IProps, IState> {

    render() {
        return <form>
            {this.props.children}
        </form>
    }
}