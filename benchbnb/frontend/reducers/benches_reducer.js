import { RECEIVE_ALL_BENCHES, RECEIVE_BENCH } from '../actions/bench_actions';
import { merge } from 'lodash';

const benchesRuducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_BENCHES:
            return merge({}, oldState, action.benches);
        case RECEIVE_BENCH:
            return merge({}, oldState, {[action.bench.id]: action.bench})
        default:
            return oldState;
    }
}


export default benchesRuducer;