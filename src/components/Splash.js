import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchCategories } from '../actions';

const Splash = () => {
    return(
        <Link to="/films">
        <section className="o-splash">
            <article id="a-splash-enter">
            <h1>LARS BLUMERS</h1>
            <h2>ENTER</h2>
            <ul>
                <li>Films</li>
                <li>Commercials</li>
                <li>Strange things</li>
                <li>Projects</li>                
            </ul>
            </article>
        </section>
        </Link>
    )
}

export default Splash;