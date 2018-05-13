import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../actions';

class Menu extends Component {

    componentDidMount(){
        this.props.fetchCategories(()=>console.log('Catégories chargées'));
    }

    constructor(props){
        super(props);

        this.state = {
            currentCat:0
        }

    }    

    renderList(){

        return _.map(this.props.categories, categorie => {
            categorie.name = categorie.titre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\s/g,'');
            return(
                <li className="a-menu__item" key={categorie.id}>
                    <Link to={`/${categorie.name}`}><p>{categorie.titre}</p></Link>
                </li>                
            )
        });
        
    }

    render(){

        if(!this.props.categories || this.props.categories === {}){
            return <div>Loading</div>;
        }else{

            return <div>
            <ul className="m-menu">
                <li className="a-menu__item"><p>Lars Blumer</p></li>
                {this.renderList()}
                <li className="a-menu__item">
                    <Link to={`/me`}><p>Me</p></Link>
                </li>
                <li className="a-menu__item">
                    <Link to={`/contact`}><p>Contact</p></Link>
                </li>
            </ul>            
            </div>

        }

    }

}

function mapStateToProps(state){
    return { categories: state.categories};
}

export default connect(mapStateToProps, { fetchCategories })(Menu);