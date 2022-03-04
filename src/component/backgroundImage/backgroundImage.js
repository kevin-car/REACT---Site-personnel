import React from "react";
import './backgroundImage.css'

class BackgroundImage extends React.Component{


    render(){
        return(
            <img style={{opacity : this.props.opacity }} className="imgBackground" alt="mon image de fond" srcSet={require("../../img/Image_de_fond.jpg")} />
        )
    }
}
export default BackgroundImage