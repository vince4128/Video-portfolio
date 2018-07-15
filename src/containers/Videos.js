import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import { fetchVideos } from '../actions';

//component
//import SwitchVid from '../components/SwitchVid';
import Video from '../components/video';
import Thumb from '../components/Thumb';

class Videos extends Component {

    componentDidMount(){
        this.props.fetchVideos(()=>console.log('Videos chargées'));
        //window.scrollTo(0, 0);
    }

    componentDidUpdate(){
        window.scrollTo(0, 0);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({activeVideo : null});
        window.scrollTo(0, 0);
    }

    constructor(props){
        super(props);
        this.state = {
            activeVideo : null
        }

        this.setActive = this.setActive.bind(this);
        this.getActive = this.getActive.bind(this);
    }

    setActive(id){
        this.setState({activeVideo : id});
    }

    getActive(){

        let activeVideo = {};

        if(this.state.activeVideo){
            _.map(this.props.videos, video => {
                if(video.id === this.state.activeVideo){
                    activeVideo = video;
                };
            });
        }else{
            return;
        }

        return activeVideo;
        
    }

    renderList(){

        const videos = _.map(this.props.videos, video => {
            video.pos = parseInt(video.pos);
            return video;
        });

        const filteredVideo = videos.filter((video)=>{
            return video.categorie.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\s/g,'') 
            === this.props.match.url.substr(1);
        });

        const orderByPos = _.sortBy(filteredVideo,'pos');

        const isAlone = () => {
            if(orderByPos.length === 1){
                return "m-video-list-item--alone";
            }else{
                return " ";
            }  
        }

        return _.map(orderByPos, video => {            
            //return <article key={video.id}><Video video={video}/></article>
            /*if(video.id !== this.state.activeVideo){
                return <article key={video.id}><Thumb video={video} img={'thumbimg.jpg'} onVideoSelect={(videoId)=>{this.setActive(videoId)}}/></article>
            }else{
                return <article key={video.id}><Video video={video}/></article>
            }*/

            /* the good one for now */
            /*return <article className="m-video-list-item" key={video.id}><SwitchVid video={video} isActive={video.id === this.state.activeVideo} onVideoSelect={(videoId)=>{this.setActive(videoId)}} /></article>*/

            return <article className={"m-video-list-item " + isAlone()} key={video.id}><Thumb video={video} img={video.thumb} isActive={video.id === this.state.activeVideo} onVideoSelect={(videoId)=>{this.setActive(videoId)}} /></article>

        });

    }

    render(){

        if(!this.props.videos || this.props.videos === {}){
            return <div>Loading</div>;
        }

        if(this.state.activeVideo){
            return <div>            
            <section className="m-video-active">                
               <article><Video video={this.getActive()} isActive={this.props.isActive}/></article>
            </section>
            <section className="o-video-list">            
                {this.renderList()}
            </section>
        </div>;

        }

        return <div>            
            <section className="m-video-active">                
                {/*<article><Video video={this.getActive()} isActive={this.props.isActive}/></article>*/}
            </section>
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