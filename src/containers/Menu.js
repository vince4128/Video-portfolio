import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchCategories } from '../actions';

class Menu extends Component {

    componentDidMount(){
        this.props.fetchCategories(()=>console.log('Catégories chargées'));
        document.body.classList.toggle('m-menu--open', this.state.open);        
    }

    constructor(props){
        super(props);

        this.state = {
            currentCat:0,
            open:false
        }

        this.isOpened = this.isOpened.bind(this);
        this.setOpen = this.setOpen.bind(this);
    }
    
    setActive(item){
        if(item === this.props.location.pathname.substr(1)){
            return "active";
        }else{
            return "";
        }                
    }

    isOpened(){
        if(this.state.open){
            return "m-menu--open";
        } else {
            return "";
        }
    }

    setOpen(shouldBeToggled=true){
        alert('shouldBeToggled est ' + shouldBeToggled + " avant tout opé open " + this.state.open);
        if(shouldBeToggled){            
            this.setState({ open: !this.state.open});
            alert('shouldBeToggled ' + this.state.open);
        }else{
            this.setState({ open: false})
            alert('should Be closed ' + this.state.open);
        }
        document.body.classList.toggle('m-menu--open', this.state.open);
    }

    renderList(){

        return _.map(this.props.categories, categorie => {
            categorie.name = categorie.titre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\s/g,'');
            return(                
                <li key={categorie.id} className={"a-menu__item " + this.setActive(categorie.name)} onClick={() => this.setOpen(false)}>
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
                <li className="a-menu__item">Lars Blumer</li>
                {this.renderList()}                
                <li className={"a-menu__item " + this.setActive('me')} onClick={() => this.setOpen(false)}>
                    <Link to={`/me`}>
                        Me
                    </Link>
                </li>                                
                <li className={"a-menu__item " + this.setActive('contact')} onClick={() => this.setOpen(false)}>
                    <Link to={`/contact`}>
                        Contact
                    </Link>
                </li>  
                <li className="a-menu__toggle" onClick={() => this.setOpen()}>
                toggle
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