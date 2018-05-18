import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchCategories } from '../actions';

class Menu extends Component {

    componentDidMount(){
        this.props.fetchCategories(()=>console.log('Catégories chargées'));
        //document.body.classList.remove('m-menu--open');        
    }

    constructor(props){
        super(props);

        this.state = {
            currentCat:0,
            open:false
        }

        this.setToggle = this.setToggle.bind(this);
        this.setClose = this.setClose.bind(this);
        this.isOpen = this.isOpen.bind(this);
    }
    
    setActive(item){
        if(item === this.props.location.pathname.substr(1)){
            return "active";
        }else{
            return "";
        }                
    }

    setToggle(){    
        this.setState({ open: !this.state.open},() => {
            document.body.classList.toggle('m-menu--open', this.state.open);
        });        
    }

    setClose(){
        this.setState({ open: false});
        document.body.classList.remove('m-menu--open');
    }

    isOpen(){
        if(this.state.open){
            return "nav-menu--open"
        }else{
            return "";
        };
    }

    renderList(){

        return _.map(this.props.categories, categorie => {
            categorie.name = categorie.titre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\s/g,'');
            return(                
                <li key={categorie.id} className={"a-menu__item " + this.setActive(categorie.name)} onClick={() => this.setClose()}>
                    <Link to={`/${categorie.name}`}>
                        {categorie.titre}
                    </Link>  
                </li>                              
            )
        });
        
    }

    render(){

        if(!this.props.categories || this.props.categories === {}){
            return <div>Loading</div>;
        }else{

            return <div className={"u-fixed-top u-fixed-top--menu-top "}>
            <ul className="m-menu ">
                <li className="a-menu__item">Lars Blumer<span className="a-menu__item--complement">{this.props.location.pathname.substr(1)}</span></li>
                {this.renderList()}                
                <li className={"a-menu__item " + this.setActive('me')} onClick={() => this.setClose()}>
                    <Link to={`/me`}>
                        Me
                    </Link>
                </li>                                
                <li className={"a-menu__item " + this.setActive('contact')} onClick={() => this.setClose()}>
                    <Link to={`/contact`}>
                        Contact
                    </Link>
                </li>  
                <li className={"a-menu__toggle " + this.isOpen()} id="nav-icon" onClick={() => this.setToggle()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </li>              
            </ul>                      
            </div>

        }

    }

}

function mapStateToProps(state){
    return { categories: state.categories};
}

export default withRouter(connect(mapStateToProps, { fetchCategories })(Menu));