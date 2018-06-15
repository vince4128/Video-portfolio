import React,  { Component } from 'react';

class Thumb extends Component {

    constructor(props){
        super(props);

        this.state = {
            loaded:false
        }

        this.handleImageLoaded = this.handleImageLoaded.bind(this);
        this.handleImageError = this.handleImageError.bind(this);
        this.isImgLoaded = this.isImgLoaded.bind(this);
    }

    handleImageLoaded(){
        this.setState({loaded:true});
    }

    handleImageError(){
        this.setState({loaded:false});
    }

    isImgLoaded(el){
        if(el === "spin"){
            return this.state.loaded ? "display-none" : "";
        }else if(el === "img"){
            return this.state.loaded ? "animated fadeIn" : "";
        }
    }

    render(){
        /*if(!this.state.loaded) {
            return <div class="m-spinner">
            <div class="m-spinner__double-bounce1"></div>
            <div class="m-spinner__double-bounce2"></div>
          </div>
        }*/
        return <section>
            <article className="m-thumb animated fadeIn" onClick={() => this.props.onVideoSelect(this.props.video.id)}>
                <img 
                    src={`admin/thumb/${this.props.img}`}
                    onLoad={this.handleImageLoaded}
                    onError={this.handleImageError}
                    className={this.isImgLoaded("img")}
                />
                <div class={"m-spinner " + this.isImgLoaded("spin")}>
                    <div class="m-spinner__double-bounce1"></div>
                    <div class="m-spinner__double-bounce2"></div>
                </div>                
            </article>
            {/*<div className="m-video-info">
                <p>
                    <span className="a-video-info-item--name">{this.props.video.titre}</span>&nbsp;                    
                    <span className="a-video-info-item--client">{this.props.video.client}</span>&nbsp;
                    <span className="a-video-info-item--desc">{this.props.video.legende}</span>
                </p>             
            </div>*/}
        </section>
    }

}

export default Thumb;