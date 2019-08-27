import React, { Component } from 'react';

class Counts extends Component {
    state = {
        count: this.props.value
    };
    handleClick = () => {
        this.setState( { count: this.state.count + 1 } )
    }
    render(){
        return(
            <React.Fragment>
                <span className={this.badgeSet()}>{this.showCount()}</span>
                <button onClick={this.handleClick} className="btn-sm btn">Increment</button> 
            </React.Fragment>
        )
    }
    showCount(){
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }

    badgeSet(){
        let badge ="badge m-2 badge-";
        let { count } = this.state;
        badge += count === 0 ? "warning" :  "primary";
        return badge;
        
    }
}

export default Counts;