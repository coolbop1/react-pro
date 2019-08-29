import React, { Component } from 'react';
import List from './user';

class Single extends Component {
    
    state = { 
        info: [],
        st:0
     }
     search = (userId,alluser )=>{
         console.log(userId)
        let allusers = alluser;
        let oneUser = allusers.find(u => {return u.id === userId || u.fname === userId  || u.lname === userId || u.address === userId || u.contact === userId || u.email === userId ;});
       
        if(oneUser){
        this.setState({st : 0})
        this.setState({info : [oneUser]})
        }else{
            this.setState({st : 1})
        }
     }
    render() { 
        return ( 
            this.state.st === 0 ? <React.Fragment>
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
            </React.Fragment> : 
            <React.Fragment>
                <div className={this.props.visibility}>
                    <h3>Not found</h3>
                </div>

            </React.Fragment>
            
         );
    }
}
 
export default Single;
