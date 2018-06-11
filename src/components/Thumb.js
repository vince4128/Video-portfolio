import React from 'react';

const Thumb = (props) => {

    return(
        <section>
            {/*<Link to={`${}`}>*/}
            <article className="m-thumb animated fadeIn" onClick={() => props.onVideoSelect(props.video.id)}>
                {/*<img src={`img/${props.img}`}></img>*/}
                <img src={`admin/thumb/${props.img}`}></img>
            </article>
            {/*</Link>*/}
            <div className="m-video-info">
                <p>
                    <span className="a-video-info-item--name">{props.video.titre}</span>&nbsp;                    
                    <span className="a-props.-info-item--client">{props.video.client}</span>&nbsp;
                    <span className="a-video-info-item--desc">{props.video.legende}</span>
                </p>             
            </div>
        </section>
    )

}

export default Thumb;