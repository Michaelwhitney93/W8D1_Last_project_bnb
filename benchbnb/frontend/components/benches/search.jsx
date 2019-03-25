import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = (props) => {
    debugger
    return(
    <div>
        <BenchMap benches={props.benches}/>
        <BenchIndex fetchBenches={props.fetchBenches} benches={props.benches} />
    </div>
    );
}

export default Search;