import React, { Component } from 'react';
import List from './user';
class Users extends Component {
    state = { 
        info : [
            {id:1, br:"1b", frag:"1fr", fname:"Bidemi", lname: "Oritunmise", date: "03/15/1991", address: "Nigeria", email: "bidoritunmise@gmail.com", phone: "1234570000" },
            {id:2, br:"2b", frag:"2fr",  fname:"Peter", lname: "Tunmise", date: "05/12/1990", address: "Nigeria", email: "oritunmise@gmail.com", phone: "123245570000", }
        ]
     }
     deleteLine = todelete => {
        let allusers = this.state.info;
        let single = this.findOne(todelete);
         let index = allusers.indexOf(single);
         if(index > -1)
         allusers.splice(index, 1 );
         this.setState({info: allusers });
     }
     alluser = () =>{
        let allusers = this.state.info;
        return allusers;
     }
     findOne = userId =>{
        let allusers = this.state.info;
        let oneUser = allusers.find(u => {return u.id === userId;});
        return oneUser;
     }
     handleForm = nuser =>{
         let formerARR = this.state.info;
         let newId =this.state.info.length + 1;
         let newuser = {
            id: `${newId}`,
            br: `${newId}b`,
            frag: `${newId}fr`,
            fname: nuser.fname,
            lname: nuser.lname,
            date: nuser.date,
            address: nuser.address,
            email: nuser.email,
            phone: nuser.phone

         }
         formerARR.push(newuser)
         
         this.setState({info: formerARR });
         this.props.showUpdated();
     }
     
    render() { 
        return ( 
            <React.Fragment>
                
                <div className={this.props.visibility}>
                
                <table className="table table-bordred table-striped">
                    <thead>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>DOB</td>
                        <td>Country</td>
                        <td>Email</td>
                        <td>Contact</td>
                        <td>Delete</td>
                    </thead>
                    <tbody>                        
                    {this.state.info.map(ray => <React.Fragment key={ray.frag}><List key={ray.id} deleteOne={()=>{this.deleteLine(ray.id)}} id={ray.id} fname={ray.fname} ref={this.backtopage} lname={ray.lname} date={ray.date} address={ray.address} email={ray.email} phone={ray.phone} /></React.Fragment>)}
                    </tbody>
                </table>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Users;