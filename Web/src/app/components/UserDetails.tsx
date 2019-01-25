import * as React from 'react';
import { IGitHubUser } from '../IGitHubUser'

interface IProps {
    user: IGitHubUser;
}


export class UserDetails extends React.Component<IProps> {

    userIsLoaded():boolean {
        return this.props.user != undefined;
    }

    render() {
        return (<>
            {(!this.userIsLoaded()) && <h2>Loading... Please wait...</h2>}
            {(this.userIsLoaded()) && 
            <>
                <h2>Login: {this.props.user.login}</h2>
                <img src ={this.props.user.avatar_url} width={50}/>
                <br/>
            </>}
        </>)
    }
}