import React, {Component} from "react";

class ButtonComponent extends Component {
    constructor(){
        super()
        this.state = {
            cont:0
        }
    }
    render(){
        return(
            <div className="boton2">
                <h1> {this.state.cont} </h1>
                <button onClick={() => this.setState({cont:this.state.cont+1})}> Contar2 </button>
            </div>
        )
    }
}

export default ButtonComponent