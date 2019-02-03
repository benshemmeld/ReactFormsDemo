import * as React from 'react';

interface IProps extends React.Props<NotFound> {
}

export class NotFound extends React.Component<IProps, {}> {
    render() {
        return <>
            <h1>Oops!  That page was not found!</h1>
        </>
    }
}