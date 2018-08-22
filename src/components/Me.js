import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
            I have shot many commercials. Some of them quite funny. Some won <AnchorLink href='#prizes'>prizes</AnchorLink>.</p>
            <AnchorLink  href='#prizes' className="a-prizes"><span className="m-btn--circle m-btn--prizes">See prizes</span></AnchorLink>
        </div>

        <div id="prizes" className="m-me__prize">

            <article class="m-me__timeline">                
                <ul>                    
                    <span class="m-me__timeline__date">2014</span>
                    <li>                                     
                        <p>Effie France Gold for Leclerc „Parapharmacie“</p>                        
                    </li>
                    <span class="m-me__timeline__date">2013</span>
                    <li>                                     
                        <p>Grand Prix Stratégies de la Publicité Mention for Axa</p>                        
                    </li>
                    <span class="m-me__timeline__date">2012</span>
                    <li>                                     
                        <p>Winner Best Screenplay, Max Ophüls Festival 2011 for MIKE</p>                        
                    </li>
                    <span class="m-me__timeline__date">2006</span>
                    <li>                                     
                        <p>Bronze Digital Lion Cannes Advertising Film Festival for Wilkinson „Dare“</p>                        
                    </li>
                    <li>                                     
                        <p>EACA Euro Effies Bronze</p>                        
                    </li>
                    <span class="m-me__timeline__date">2003</span>
                    <li>                                     
                        <p>Gramado Cinema Festival / Silver Cock</p>                        
                    </li>
                    <li>                                     
                        <p>Grand Prix Stratégies de la Publicité Winner</p>                        
                    </li>
                    <li>                                     
                        <p>First Prize Rosenheim Film Festival for Predateurs Domestiques</p>                        
                    </li>
                    <li>                                     
                        <p>Grand Prix Stratégies de la Publicité Mention</p>                        
                    </li>
                    <span class="m-me__timeline__date">2002</span>
                    <li>                                     
                        <p>Bronze Prix Club des Directeurs Artistiques</p>                        
                    </li>
                </ul>
            </article>
        </div>

    </section>
    
    )
}

export default Me;