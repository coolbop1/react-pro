import React, { Component,createRef } from 'react';
import Allbody from './addusers';

class Top extends Component {
    state = {
            listHide: "container hide",
            listShow: "container show",
            listDisplay: "container show",
            formDisplay: "container hide",
            singleDisplay: "container hide",
            topButtonText: "ADD USER",
            
         };
         constructor(props){
            super(props);
            this.oneperson = createRef();
        }
        findOne = () => {
            this.oneperson.current.act(document.getElementById('search_input').value);
            this.setState({singleDisplay: "container show", listDisplay: this.state.listHide,formDisplay: this.state.listHide,topButtonText: "ALL USERS" }) 
         
        }
     addNew = () => {
       this.state.listDisplay === "container show" ? 
       this.setState({singleDisplay: "container hide", listDisplay: this.state.listHide,formDisplay: this.state.listShow,topButtonText: "ALL USERS" }) :
       this.setState({singleDisplay: "container hide", listDisplay: this.state.listShow,formDisplay: this.state.listHide,topButtonText: "ADD USER" })
    }
    render() { 
        return ( 
            <React.Fragment>
                
                <div className="container">
                <table className="table">
                    <tbody>
                        <td><h4>Users</h4></td>
                        <td>
                            <div className="input-group mb-3">
                                <input type="text" class="form-control" id="search_input"  placeholder="Find User"  />
                                <div class="input-group-append">
                                    <button onClick={this.findOne} class="btn btn-outline-secondary" type="button">Search</button>
                                </div>
                            </div>
                        </td>
                        <td><button onClick={this.addNew} className="btn-sm bt-secondary btn">{this.state.topButtonText}</button></td>
                    </tbody>
                </table>
                </div>
                <Allbody ref={this.oneperson} oneVisibility={this.state.singleDisplay} listreset = {this.addNew} listVisibility={this.state.listDisplay} formVisibility={this.state.formDisplay} />
            </React.Fragment>
         );
    }
}
 
export default Top;