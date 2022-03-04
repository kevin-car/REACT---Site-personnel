import React from "react";

class Titre extends React.Component{
    render(){
        return(
            <h2 className="titleBiographie">{this.props.children}</h2>
            )
    }
}
export default Titre