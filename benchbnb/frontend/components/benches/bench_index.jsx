import React from 'react';
import BenchIndexItem from './bench_index_item'

    
class BenchIndex extends React.Component {

    componentDidMount() {
        debugger
        this.props.fetchBenches();
    }
    render() {
        debugger
        const benches = this.props.benches.map((bench) => {
            return <BenchIndexItem key={bench.id} bench={bench} />
        })
        debugger
        return (
            <div>
                <ul>
                    {benches}
                </ul>
            </div>
        )
    }
};

export default BenchIndex;