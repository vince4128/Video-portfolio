import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchVideos } from '../actions';

//component
import Video from '../components/video';
import Thumb from '../components/Thumb';

class Videos extends Component {

    componentDidMount(){
        this.props.fetchVideos(()=>console.log('Videos chargées'));
        //window.scrollTo(0, 0);
    }

    componentDidUpdate(){
        //window.scrollTo(0, 0);
    }

    componentWillReceiveProps(nextProps) {

      }

    constructor(props){
        super(props);
        this.state = {
            activeVideo : null
        }

        this.setActive = this.setActive.bind(this);
    }

    setActive(id){
        alert("set " + id + " as active ! ");
        this.setState({activeVideo : id});
    }

    renderList(){

        const videos = _.map(this.props.videos, video => {
            return video;
        });

        const filteredVideo = videos.filter((video)=>{
            return video.categorie.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\s/g,'') 
            === this.props.match.url.substr(1);
        });

        const orderByPos = _.sortBy(filteredVideo,'pos');

        return _.map(orderByPos, video => {            
            return <article key={video.id}><Video video={video}/></article>
            /*if(video.id !== this.state.activeVideo){
                return <article key={video.id}><Thumb video={video} img={'thumbimg.jpg'} onVideoSelect={(videoId)=>{this.setActive(videoId)}}/></article>
            }else{
                return <article key={video.id}><Video video={video}/></article>
            }*/
            
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