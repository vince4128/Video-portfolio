import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../actions';
import Video from './Video';

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
                <li key={categorie.id}>
                    <Link to={`/${categorie.name}`}><p>{categorie.titre} {categorie.id}</p></Link>
                </li>                
            )
        });
        
    }

    render(){

        if(!this.props.categories || this.props.categories === {}){
            return <div>Loading</div>;
        }else{

            return <div>
            <ul>
                {this.renderList()}
                <li>
                    <Link to={`/me`}><p>Me</p></Link>
                </li>
                <li>
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