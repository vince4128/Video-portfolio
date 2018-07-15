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
            return this.state.loaded ? "animated fadeIn" : "display-none";
        }
    }

    render(){
        return <section>
            <article className="m-thumb animated fadeIn" onClick={() => this.props.onVideoSelect(this.props.video.id)}>
                <div className="m-video-info--thumb">
                    <p className="m-video-info--thumb__wrapper">                  
                        <p className="a-video-info-item--client">{this.props.video.client}</p>
                        <p className="a-video-info-item--name">{this.props.video.titre}</p>                        
                    </p>                               
                </div> 
                <img 
                    src={`admin/thumb/${this.props.img}`}
                    onLoad={this.handleImageLoaded}
                    onError={this.handleImageError}
                    className={this.isImgLoaded("img")}
                />
                <div className={"m-spinner-wrapper " + this.isImgLoaded("spin")}>
                    <div className="m-spinner">
                        <div className="m-spinner__double-bounce1"></div>
                        <div className="m-spinner__double-bounce2"></div>
                    </div>
                </div>                               
            </article>
        </section>
    }

}

export default Thumb;