import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({video}) => {

//https://help.vimeo.com/hc/fr/articles/224972808-Personnaliser-le-player-int%C3%A9gr%C3%A9    

    return(
        <div className="m-video">
            <ReactPlayer 
                className='a-video-player' 
                url={`${video.lien}`} 
                controls />
            <div className="m-video-info">
                <p>
                    <span className="a-video-info-item--name">{video.titre}</span> <span className="a-video-info-item--client">{video.client}</span> - <span className="a-video-info-item--year">{video.annee}</span>&nbsp;
                </p>             
                <p className="a-video-info-item--desc">  {video.legende}
                </p>
            </div>
            <hr/>                        
        </div>
    )

}

export default Video;