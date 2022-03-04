import React from "react";
import "./projet.css"

class Projet extends React.Component{

    render(){
        return(
            <>
            <div className="projet">
                <div className="projetPhoto">
                    <img src={this.props.photoSite} alt="illustration d'un projet réalisé" />
                </div>
                <div className="projetDescription">
                    <div className="titreSite">
                        <p>{this.props.titredusite}</p>
                    </div>
                    <div className="liensSite">
                        <a href={this.props.lienGithub} target="_blank">{this.props.titre1} </a> <br/>
                        <a href={this.props.lienSite} target="_blank">{this.props.titre2} </a>
                    </div>
                </div>

            </div>
            </>
        )
    }
}

export default Projet