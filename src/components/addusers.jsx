import React, { Component,createRef } from 'react';
import Countries from './countries';
import Users from './users';
import Single from './oneuser';

class Allbody extends Component{
    constructor(props){
        super(props);
        this.users = createRef();
      this.onePerson = createRef();
        
    }
    handleSubmit = () => {
        let newuser = {
            fname: document.getElementById('first_name').value,
            lname: document.getElementById('last_name').value,
            date: document.getElementById('dob').value,
            address: document.getElementById('country').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('contact').value,
            searchinp: ""

         }
        this.users.current.handleForm(newuser);
        return false;
    }
    act = searchinput =>{
        this.setState({searchinp: searchinput})
        this.onePerson.current.search(searchinput,this.users.current.alluser());
    }
    render(){
        return(
            <React.Fragment>
                <Single ref={this.onePerson}  visibility={this.props.oneVisibility} />
                <Users showUpdated={this.props.listreset} visibility={this.props.listVisibility} ref={this.users} />
                <div className={this.props.formVisibility}>
                    <form  method="post">
                        <h2>Add User</h2>
                            <div className="form-group">
                                <input type="text" className="form-control" id="first_name" placeholder="First Name" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="last_name" placeholder="Last Name" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control" id="dob" placeholder="01/03/1991" required="required" />
                            </div>
                            <div className="form-group">
                                <select id="country" className="form-control" required>
                                    <option value="">choose</option>
                                    <Countries />
                                </select> 
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" placeholder="Email" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="tel" className="form-control" id="contact" placeholder="Phone Number" required="required" />
                            </div>
                            </form>
                            
                            <div className="form-group">
                                <button onClick={this.handleSubmit} className="btn btn-success btn-lg btn-block">Add Users</button>
                            </div>
                        
                    
                    </div>
            </React.Fragment>
        )
    }
}

export default Allbody;
