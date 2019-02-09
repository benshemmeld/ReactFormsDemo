import * as React from 'react';
import { TextInput } from '../../TextInput';
import { Form } from '../../Form';

interface IProps extends React.Props<Page2> {
}

interface IState {
    FirstName: string;
    LastName: string;
}

export class Page2 extends React.Component<IProps, IState> {

    

    render() {
        return <>
            <h2>{this.state ? this.state.FirstName : ""}</h2>
            <Form>
                <div className="form-horizontal col-sm-6">

                    <TextInput id="FirstName" label="First Name" onChange={value => this.setState({ FirstName: value })}></TextInput>
                    <TextInput id="LastName" label="Last Name" onChange={value => this.setState({ LastName: value })}></TextInput>

                    <div className="col-sm-2 col-sm-offset-10" style={{ marginTop: 20 }} >
                        <button type="submit" className="btn btn-success btn-lg">Save</button>
                    </div>
                </div>
            </Form>
        </>
    }
}