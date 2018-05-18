import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchVideos } from '../actions';

//component
import Video from '../components/video';

class Videos extends Component {

    componentDidMount(){
        this.props.fetchVideos(()=>console.log('Videos chargées'));
        window.scrollTo(0, 0);
    }

    componentDidUpdate(){
        window.scrollTo(0, 0);
    }

    componentWillReceiveProps(nextProps) {

      }

    constructor(props){
        super(props);
    }

    renderList(){

        const videos = _.map(this.props.videos, video => {
            return video;
        });

        const filteredVideo = videos.filter((video)=>{
            return video.categorie.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\s/g,'') 
            === this.props.match.url.substr(1);
        });

        return _.map(filteredVideo, video => {            
            return <article key={video.id}><Video video={video}/></article>
        });

    }

    render(){

        if(!this.props.videos || this.props.videos === {}){
            return <div>Loading</div>;
        }

        return <div>
            <section className="o-video-list">
                {this.renderList()}
            </section>
        </div>;

    }

}

function mapStateToProps(state){
    return { videos: state.videos};
}

export default connect(mapStateToProps, { fetchVideos })(Videos);