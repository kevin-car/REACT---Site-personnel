import React from "react";
import "./header.css"
import Menu from "./Menu/myMenu"
import { slide as MenuBurger } from 'react-burger-menu'

class Header extends React.Component {

    state = {
        affichageMenu : "none"
    }

    affichageDuMenu = () => {
        if(this.state.affichageMenu === "none" ){
            this.setState({affichageMenu : "block"})
        }else if(this.state.affichageMenu === "block"){
            this.setState({affichageMenu : "none"})
        } 
    }
    render(){
        return(
            <>

            <div className="header" id="headerr">

                <div className="nom menu-item menu-item">
                    Kevin CARPENTIER
                </div>

                <div className="developpeurDispo menu-item">
                    <div className="defilement">
                        <div className="txt t1"> DEVELOPPEUR DISPONIBLE <span className="pointVert"> • </span>  </div>  
                        <div className="txt t2"> DEVELOPPEUR DISPONIBLE <span className="pointVert"> • </span> </div>  
                        <div className="txt"> DEVELOPPEUR DISPONIBLE <span className="pointVert"> • </span> </div>  
                    </div>
                </div>

                <div className="Menu menu-item">
                     <Menu
                         affichageDuMenu = {this.affichageDuMenu}
                     />
                </div>
            
            </div> 
            <div className="menuResponsive" style={{display: this.state.affichageMenu}}>
                <ul className="titreMenu">
                    <a href="#biographie" className="titreMenu__" onClick={this.affichageDuMenu}>Biographie</a>
                    <a href="#competencess" className="titreMenu__" id='competences' onClick={this.affichageDuMenu}>Competences</a>
                    <a href="#projetss" className="titreMenu__" id='projets' onClick={this.affichageDuMenu}>Projets</a>
                    <a href="#contactt" className="titreMenu__" id='contact' onClick={this.affichageDuMenu}>Contact</a>
                </ul>
            </div>

        </>

            
        )
    }
}

export default Header