import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
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
    
    setActive(item){
        if(item === this.props.location.pathname.substr(1)){
            return "active";
        }else{
            return "";
        }        

    }

    renderList(){

        return _.map(this.props.categories, categorie => {
            categorie.name = categorie.titre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\s/g,'');
            return(
                <Link to={`/${categorie.name}`} className={"a-menu__item " + this.setActive(categorie.name)}>
                <li key={categorie.id}>
                    <p>{categorie.titre}</p>
                </li>
                </Link>                
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
                <Link to={`/me`} className={"a-menu__item " + this.setActive('me')}>
                    <li>
                        <p>Me</p>
                    </li>
                </Link>
                <Link to={`/contact`} className={"a-menu__item " + this.setActive('contact')}>
                    <li>
                        <p>Contact</p>
                    </li>
                </Link>
            </ul>            
            </div>

        }

    }

}

function mapStateToProps(state){
    return { categories: state.categories};
}

export default withRouter(connect(mapStateToProps, { fetchCategories })(Menu));