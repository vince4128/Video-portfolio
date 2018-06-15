import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Splash = () => {
    return(
        <section className="o-splash">
            <article id="a-splash-enter"><Link to="/films">LARS BLUMERS</Link></article>
        </section>
    )
}

export default Splash;