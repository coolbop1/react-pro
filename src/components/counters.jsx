import React, { Component } from 'react';
import Counts from './counterr';
class Counting extends Component {
    state = { 
        rays : [
            {id:1, br:"1b", frag:"1fr", value:4},
            {id:2, br:"2b", frag:"2fr",  value:0},
            {id:3, br:"3b", frag:"3fr", value:0},
            {id:4, br:"4b", frag:"4fr", value:0}
        ]
     }
    render() { 
        return ( 
            <React.Fragment>
                <div>{this.state.rays.map(ray => <React.Fragment key={ray.frag}><Counts key={ray.id} value={ray.value} /> <br key={ray.br}/> </React.Fragment>)}</div>
            </React.Fragment>
         );
    }
}
 
export default Counting;