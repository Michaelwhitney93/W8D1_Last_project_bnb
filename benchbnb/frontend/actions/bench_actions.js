import * as ApiBenchUtil from '../util/bench_api_util';
export const RECEIVE_ALL_BENCHES = "RECEIVE_ALL_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";

const receiveAllBenches = (benches) => ({
    type: RECEIVE_ALL_BENCHES,
    benches,
});

const receiveBench = (bench) => ({
    type: RECEIVE_BENCH,
    bench,
});

export const fetchBenches = () => (dispatch) => (
    ApiBenchUtil.fetchBenches().then((benches) => dispatch(receiveAllBenches(benches)))
);

export const fetchBench = (id) => (dispatch) => (
    ApiBenchUtil.fetchBench(id).then((bench) => dispatch(receiveBench(bench)))
);

export const createBench = (benchForm) => (dispatch) => (
    ApiBenchUtil.createBench(benchForm).then((bench) => dispatch(receiveBench(bench)))
);