import React, { Component } from 'react';
import ActionButton from './ActionButton';
import TotalCountDisplay from './TotalCountDisplay';

class CounterApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            totalHitCount: 0,
            numbers:[1, 10, 100, 1000, -1, -100, -1, 1, 10, 100, 1000, -1, -100, -1]
        };
        console.log('CounterApp :: constructor');
    }

    incrementTotalCount(v) {
        let { totalHitCount } = this.state;
        //totalHitCount += 1
        totalHitCount += v
        this.setState({ totalHitCount });
    }

    renderActionButtons() {
        let { numbers } = this.state;
        return numbers.map((n, idx) => <ActionButton key={idx} value={n} onHit={v => this.incrementTotalCount(v)} />)
    }

    render() {
        let { totalHitCount } = this.state;
        return (
            <div className="card card-default">
                <div className="card-header">Counter App  : <span className="badge badge-warning">{totalHitCount}</span></div>
                <div className="card-body">
                    {
                        /* 
                        <ActionButton value={10} onHit={v => this.incrementTotalCount(v)} />
                        <ActionButton value={100} onHit={v => this.incrementTotalCount(v)} />
                        <ActionButton value={-1} /> 
                        */
                    }
                    {
                        this.renderActionButtons()
                    }
                    <div style={{ clear: "both" }}>
                        <hr />
                        <TotalCountDisplay value={totalHitCount} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CounterApp;