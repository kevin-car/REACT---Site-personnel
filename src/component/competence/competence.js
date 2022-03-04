import React from "react";
import "./competence.css"


class Competence extends React.Component{

    render(){
        return(
            <div className="competenceCible">
                <img src={this.props.image} alt="logo de la compétence" />
            </div>
        )
    }
}

export default Competence