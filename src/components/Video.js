import React from 'react';
import ReactPlayer from 'react-player';

const Video = (props) => {

//https://help.vimeo.com/hc/fr/articles/224972808-Personnaliser-le-player-int%C3%A9gr%C3%A9    


    return(
        <section className="animated fadeIn">
        <div className="m-video">
            {<ReactPlayer
                onReady={()=>{console.log("ouh yeah ready ! " + props.video.id)}}
                onPause={
                    ()=>{
                        console.log("pause " + props.video.id);
                        if(!props.isActive){
                            //playing=false;
                            console.log('remettre a 0');
                        }
                    }
                }
                width="100%"
                height="100%" 
                className='a-video-player' 
                url={`${props.video.lien}`} 
                controls
                preload="true"
                playing={props.isActive}               
                config={{
                    vimeo: {
                        autoplay:true
                    }
                }}
                />}                                             
        </div>
            <div className="m-video-info">
             <p className="a-video-info-item--client">{props.video.client}</p>
             <p className="a-video-info-item--name">{props.video.titre}</p>&nbsp;
             {/*<p className="a-video-info-item--desc">  {props.video.legende}</p>*/}
        </div>
        </section>
    )

}

export default Video;