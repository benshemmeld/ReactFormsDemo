import * as React from 'react';

interface IProps extends React.Props<Page3> {
}

export class Page3 extends React.Component<IProps, {}> {
    render() {
        return <>
            <h1>This is Page 3</h1>
        </>
    }
}