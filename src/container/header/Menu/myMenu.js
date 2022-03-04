import React from "react";
import './myMenu.css'


class myMenu extends React.Component{


    render(){
        

        return(
            <>
                <nav className="liste">
                    <ul className="listItem">
                        <a style={{textDecoration: "none"}} href="#biographie">BIOGRAPHIE</a>
                        <a style={{textDecoration: "none"}} href="#competencess">COMPETENCES</a>
                        <a style={{textDecoration: "none"}} href="#projetss">PROJETS</a>
                        <a style={{textDecoration: "none"}} href="#contactt">CONTACT</a>
                    </ul>
                </nav>
                
                <div className="bouton">
                    <i  onClick={ this.props.affichageDuMenu } className="far fa-2x fa-caret-square-down"><a href="#headerr"></a></i>       
                </div>
            </>
        )
    }
}

export default myMenu