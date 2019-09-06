import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() {
        const {onRest, counters, onDelete, onIncrement, onDecrement} = this.props;
        return (
            <React.Fragment>
                <button
                    onClick={onRest}
                    className="btn btn-primary btn-sm m-2">
                    Rest
                </button>
                <br />
                {counters.map(counter =>
                    <Counter key={counter.id}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        onDelete={onDelete}
                        counter={counter}
                    />
                )}

            </React.Fragment>
        );
    }
}

export default Counters;