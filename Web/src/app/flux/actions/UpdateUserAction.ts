import { Action } from "./Action";
import { IGitHubUser } from "../../interfaces/IGitHubUser";

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