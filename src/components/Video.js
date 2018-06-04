import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({video}) => {

//https://help.vimeo.com/hc/fr/articles/224972808-Personnaliser-le-player-int%C3%A9gr%C3%A9    

    return(
        <section className="animated fadeIn">
        <div className="m-video">
            {<ReactPlayer
                width="100%"
                height="100%" 
                className='a-video-player' 
                url={`${video.lien}`} 
                controls
                preload="true" />}                                             
        </div>
            <div className="m-video-info">
            <p>
             <span className="a-video-info-item--name">{video.titre}</span> • <span className="a-video-info-item--client">{video.client}</span>&nbsp;
             <span className="a-video-info-item--desc">  {video.legende}</span>
            </p>             
        </div>
        </section>
    )

}

export default Video;