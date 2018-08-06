import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchVideos } from '../actions';

class Video extends Component {

    componentDidMount(){
        this.props.fetchVideos();
    }

    constructor(props){
        super(props);

        //this.currentPath = this.props.history.location.pathname;
        //console.log(this.currentPath);

        this.state = {
            currentPath = this.props.history.location.pathname
        }
    }

    renderList(){

        return _.map(this.props.videos, video => {
            return <li key={video.id}>{video.titre}</li>
        });

    }

    render(){
        return <h1>{/*JSON.stringify(this.props.videos)*/}
        {this.state.currentPath}
        {this.renderList()}</h1>;
    }

}

function mapStateToProps(state){
    return { videos: state.videos};
}

//export default Video;
export default connect(mapStateToProps, { fetchVideos })(Video);