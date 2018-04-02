import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';

import TrackLists from './components/TrackList'
import { configureStore } from './store';
import * as actions from './actions';

const tracks = [
    {
        id: 1,
        title: 'Em cua ngay hom qua'
    },
    {
        id: 2,
        title: 'Con mua ngang qua'
    }
];

var store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
    <Provider store={store}>
        <TrackLists />
    </Provider>,
    document.getElementById('app')
)