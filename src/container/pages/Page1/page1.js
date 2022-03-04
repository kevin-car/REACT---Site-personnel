import React from "react";
import BackgroundImage from "../../../component/backgroundImage/backgroundImage";
import Titre from "../../../component/titre/titre";
import Image from "../../../img/Image_de_fond.jpg"
import "./page1.css"

class Page1 extends React.Component {
    render(){
        console.log(Image)
        return(
            <>
                <section className="page1" id="accueil">

                    <Titre>DEVELOPPEUR WEB - NODE.JS REACT.JS </Titre>
                    <div className="page1">
                        <BackgroundImage
                            opacity="99%"
                        />
                    </div>
                    
                </section>
            </>
            )
    }
}

export default Page1
  