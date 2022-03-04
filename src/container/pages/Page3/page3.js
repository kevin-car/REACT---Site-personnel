import React from "react";
import Image from "../../../img/Image_de_fond.jpg"
import "./page3.css"
import BackgroundImage from "../../../component/backgroundImage/backgroundImage";
import Titre from "../../../component/titre/titre";
import Competence from "../../../component/competence/competence";

import node from '../../../img/logoCompetences/node.jpg'
import apirest from '../../../img/logoCompetences/APIREST.png'
import frontend from '../../../img/logoCompetences/frontend.png'
import react from '../../../img/logoCompetences/react.png'
import postman from '../../../img/logoCompetences/postman.jpg'
import mongodb from '../../../img/logoCompetences/mongodb.webp'
import sqlnosql from '../../../img/logoCompetences/sqlnosql.jpg'
import sass from '../../../img/logoCompetences/sass.png'
import javascript from '../../../img/logoCompetences/javascript.jpg'
import figma from '../../../img/logoCompetences/figma.webp'
import bootstrap from '../../../img/logoCompetences/bootstrap.png'
import formikyup from '../../../img/logoCompetences/formikyup.jpg'
import sequelize from '../../../img/logoCompetences/sequelize.png'

class Page3 extends React.Component {
    render(){
        return(
                <section className="page3" id="competencess">

                    <Titre> COMPETENCES </Titre>

                    <div className="competences" >
                        <div className="competenceBackend">
                            <Competence image={node} />
                            <Competence image={apirest} />
                            <Competence image={postman} />
                            <Competence image={mongodb} />
                            <Competence image={sqlnosql} />
                            <Competence image={sequelize} />
                        </div>

                        {/* Barre de séparation backend - Frontend */}                        
                        <div className="barreHorizontale"> </div>
                        {/* Barre de séparation backend - Frontend */}                        
                        <div className="barreVerticale"> </div>

                        <div className="competenceFrontend">
                            <Competence image={frontend} />
                            <Competence image={react} />
                            <Competence image={sass} />
                            <Competence image={javascript} />
                            <Competence image={figma} />
                            <Competence image={bootstrap} />
                            <Competence image={formikyup} />
                        </div>

                    </div>
                </section>
            )
    }
}

export default Page3
  