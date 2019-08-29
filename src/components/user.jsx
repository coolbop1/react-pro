import React, { Component } from 'react';

class List extends Component {
    state = {
        id: this.props.id,
        fname: this.props.fname, 
        lname: this.props.lname, 
        date: this.props.date, 
        address: this.props.address, 
        email: this.props.email, 
        phone: this.props.phone
    };
    
    deleteAction = () => {
        this.props.deleteOne();
    }
    
    render(){
        return(
            <React.Fragment>
                <tr>
                <td>{this.state.fname}</td>
                <td>{this.state.lname}</td>
                <td>{this.state.date}</td>
                <td>{this.state.address}</td>
                <td>{this.state.email}</td>
                <td>{this.state.phone}</td>
                <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button id={this.state.id} onClick={this.deleteAction} class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash">DELETE</span></button></p></td>
                </tr>
            </React.Fragment>
        )
    }
    
}

export default List;