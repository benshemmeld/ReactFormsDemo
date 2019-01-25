import * as React from 'react';

interface IProps extends React.Props<Page2> {
}

export class Page2 extends React.Component<IProps, {}> {
    render() {
        return <>
            <h1>This is Page 2</h1>
        </>
    }
}