import React from "react";
import "./page4.css"
import Titre from "../../../component/titre/titre";
import Competence from "../../../component/competence/competence";
import Projet from "../../../component/projet/projet";
import reservia from "../../../img/sitesWeb/Reservia.jpg"
import ohmyfood from "../../../img/sitesWeb/ohmyfood.jpg"
import orinoco from "../../../img/sitesWeb/orinoco.png"
import sopekocko from "../../../img/sitesWeb/soPekocko.png"
import groupomania from "../../../img/sitesWeb/groupomania.png"
import clavier from "../../../img/Image_de_fond.jpg"

class Page4 extends React.Component{

    render(){
        return(
        <>
            <section id="projetss">

            <Titre > MES PROJETS </Titre>
                <div className="page4" >
                    <Projet
                        titredusite = "RESERVATION D'HOTEL "
                        titre1 = "Lien Github"
                        lienGithub = "https://github.com/kevin-car/CarpentierKevin_2_10012021/"
                        titre2 = "Lien vers le site WEB"
                        lienSite = "https://kevin-car.github.io/CarpentierKevin_2_10012021/"
                        photoSite = {reservia}
                        
                    />
                    <Projet
                        titredusite = "VITRINE RESTAURANTS"
                        titre1 = "Lien Github"
                        lienGithub = "https://github.com/kevin-car/KevinCarpentier_3_15022021"
                        titre2 = "Lien vers le site WEB"
                        lienSite = "https://kevin-car.github.io/KevinCarpentier_3_15022021/"
                        photoSite = {ohmyfood}
                    />
                    <Projet
                        titredusite = "E-COMMERCE"
                        titre1 = "Lien Github"
                        lienGithub = "https://github.com/kevin-car/KevinCarpentier_5_07_06_2021"
                        lienSite = "https://kevin-car.github.io/KevinCarpentier_5_07_06_2021/"
                        photoSite = {orinoco}
                    />
                    <Projet
                        titredusite = "PETITES ANNONCES"
                        titre1 = "Lien Github"
                        lienGithub = "https://github.com/kevin-car/P6--3_08_2021"
                        photoSite = {sopekocko}
                    />
                    <Projet
                        titredusite = "RESEAU SOCIAL"
                        titre1 = "Lien Github"
                        lienGithub = "https://github.com/kevin-car/Kevin_Carpentier_7"
                        photoSite = {groupomania}
                    />
                    <div className="projet">
                        <div className="projetPhoto">
                            <img src={clavier} alt="illustration d'un projet réalisé" />
                        </div>
                        <div className="projetDescription">
                            <div className="titreSite">
                                <p>SITE PERSO</p>
                            </div>
                            <div className="liensSite">
                                <a href="https://github.com/kevin-car/SitePerso" target="_blank">Lien GITHUB </a> <br/>
                                <a href="./MaquetteSitePerso.pdf" download="MaquetteSitePerso.pdf">Maquette Site  </a>
                            </div>
                        </div>
                    </div>
            </div>
            </section>
        </>
        )
    }
    
}

export default Page4