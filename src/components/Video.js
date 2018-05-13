import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({video}) => {

//https://help.vimeo.com/hc/fr/articles/224972808-Personnaliser-le-player-int%C3%A9gr%C3%A9    

    return(
        <div className="m-video">
            <ReactPlayer url={`${video.lien}`} controls />
            <div className="m-video-info">
                <p><span>{video.titre}</span> <span>{video.client}</span> <span>{video.annee}</span></p>             
                <p>{video.legende}</p>
            </div>                        
        </div>
    )

}

export default Video;