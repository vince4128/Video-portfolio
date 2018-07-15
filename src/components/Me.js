import React from 'react';

const Me = () => {
    return(
        <section className="m-me animated fadeIn">
            {/*<article className="m-me-txt">
            <p>I am a director and writer, living in Paris.</p>
            <p>I love to eat but I am a terrible cook.</p>
            <p>I like surfing and I am ok at it. </p>
            <p>We will see in 50 years if I was a good father. </p>
            <p>I have shot many short films and one feature film:</p>
            <p>It's called Mike with Marc-André Grondin, Christa Theret and Eric Elmosnino. </p>
            <p>I have shot many commercials. Some of them quite funny. Some won prizes. </p>
    </article>*/}
    
        <div className="m-me__avatar">
            {/*<img src="img/lars_square.jpg"/>*/}
        </div>

        <div className="m-me__text">
            <p>I am a director and writer, living in Paris.<br/>
            I love to eat but I am a terrible cook.<br/>
            I like surfing and I am ok at it.<br/> 
            We will see in 50 years if I was a good father.<br/>
            I have shot many short films and one feature film:<br/>
            It's called Mike with Marc-André Grondin, Christa Theret and Eric Elmosnino.<br/> 
            I have shot many commercials. Some of them quite funny. Some won prizes. </p>
        </div>

    </section>
    
    )
}

export default Me;