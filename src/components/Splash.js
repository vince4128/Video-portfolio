import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Splash = () => {
    return(
        <Link to="/films">
        <section className="o-splash">
            <article id="a-splash-enter">LARS BLUMERS</article>
        </section>
        </Link>
    )
}

export default Splash;