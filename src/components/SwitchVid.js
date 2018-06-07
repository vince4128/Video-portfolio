import React from 'react';
import Video from './Video';
import Thumb from './Thumb';

const SwitchVid = (props) => {

    const getClass = (isVideo) => {

        if(props.isActive){
            if(isVideo){
                return "animated fadeInRight"
            }else{
                return "animated fadeOutLeft"
            }
        }else{
            if(isVideo){
                return "display-none "
            }else{
                return " "
            }
        }

        
    }

    return (
        <article className="m-switchVid">
            {/*<h1>{JSON.stringify(props.isActive)}</h1>*/}
            <article className={"m-switchVid__thumb " + getClass(false)}><Thumb video={props.video} img={'thumbimg.jpg'} onVideoSelect={props.onVideoSelect}/></article>
            <article className={"m-switchVid__video " + getClass(true)}><Video video={props.video} isActive={props.isActive}/></article>
        </article>
    )

}

export default SwitchVid;