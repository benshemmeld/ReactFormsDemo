import * as React from "react"

interface IProps extends React.Props<TextInput> {
    id:string;
    label:string;
    placeholder?:string;
    width?: number;
    labelWidth?: number;
    onChange?: (value:string) => void; 
}

interface IState {
    value:string;
}

export class TextInput extends React.Component<IProps,IState> {


    width: number = this.props.width || 8;
    labelWidth: number = this.props.labelWidth || 4;
    placeholder:string = this.props.placeholder || this.props.label;

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({value: event.target.value});
        this.props.onChange(event.target.value);
    }

    render() {
        return <div className="form-group">
        <label htmlFor={this.props.id} className={"col-sm-" + this.labelWidth}>{this.props.label}</label>
        <div className={"col-sm-" + this.width}>
            <input type="text" className="form-control input-lg" id={this.props.id} placeholder={this.placeholder} onChange={this.onChange}></input>
        </div>
    </div>
    }
}