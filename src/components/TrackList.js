import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class TrackList extends Component {
    static propTypes = {
        tracks: PropTypes.array
    }

    static defaultProps = {
        track: []
    }



    render() {
        return (
            <div>
                {
                    this.props.tracks.map((track, key) => {
                        return <div key={key}>
                            Track:  {track.title}
                        </div>
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const tracks = state.track
    return { tracks }
}