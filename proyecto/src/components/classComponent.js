import React, {Component} from 'react';

class ClassComponent extends Component {
    constructor(){
        super()
        this.state = {
            cont:0
        }
        setInterval(
            () =>{
                this.setState({
                    cont:this.state.cont + 1
                })
            },1000)
    }
    render() {
        return(
            <h1>Hola Mayra & Emily su edad sumada es : {this.state.cont}  años de edad </h1>
        )
    }
}

class ClassComponent2 extends Component{
    constructor(){
        super()
        this.state = {
            cont2:5,
            cont3:100
        }
        setInterval(
            () => {
                this.setState({cont2:this.state.cont2+5,
                cont3:this.state.cont3+5})
            },1000)
    }
    render(){
        return(
            <div>
                <h2> Component2 : {this.state.cont2}  </h2>
                <h2> Component2 Estado : {this.state.cont3}  </h2>
            </div>
        )
    }
}

export  {ClassComponent2, ClassComponent};
