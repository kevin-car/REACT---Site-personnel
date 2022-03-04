import React from "react";
import Titre from "../../../component/titre/titre";
import Image from "../../../img/Image_de_fond.jpg"
import "./page2.css"

class Page2 extends React.Component {
    render(){
        console.log(Image)
        return(
            <>
                <section className="page2" id="biographie">
                <img src={Image} alt="image de fond. C'est un clavier violet, en vue perpective" className="imageBackground"/>
                    <Titre>BIOGRAPHIE</Titre>
                    <div className="colonnes">
                        <p className="texte">


                        &emsp; Titulaire d’un BEP (DEP) en Electronique, j’ai démarré sur le marché du travail en logistique. J’ai obtenu des postes de préparateur de commandes, manutentionnaires, caristes. Progressivement, j’ai eu de plus en plus de responsabilités : formation de personnels, gestion d’équipes/département, mais jamais d’évolution de poste.
                        Durant ces années, j’ai créé une entreprise de dépannage informatique. Je me déplaçais auprès de particuliers sur des problèmes basiques : virus, pièces HS.. J’ai même animé une formation sur des basiques de Windows.<br/><br/>

                        &emsp; Après 5 années à stagner professionnellement, je voulais vraiment donner un élan à ma carrière, mais aussi m’enrichir personnellement. J’ai donc décidé de reprendre mes études. Ayant arrêté assez tôt l’école, je souhaitais vraiment m’enrichir d’un cursus universitaire avant de repartir sur le marché du travail. 
                        J’ai pu, en 1 seule année, passer du niveau BEP (DEP) =>  à bac+2 (DEC), puis j’ai poursuivi une année en licence (baccalauréat).<br/><br/>

                        &emsp; Fort de ces nouvelles notions et de mon expérience professionnelle, j’ai repris ma carrière, mais cette fois avec des postes à responsabilité. J’ai abouti à gérer des grosses activités et équipes logistiques. Je suis désormais à l’aise et expérimenté sur le transport, l’entreposage, la gestion financière d’un service, le management, le recrutement, l’amélioration continue.. J’ai développé tout un panel de compétences diversifiées mais également une grande discipline de moi même.
                        En parallèle, je me passionne pour le développement WEB. Je suis de près l’actualité numérique et réalise de petites formations sur les langages basiques de l’informatique. 
                        Fin 2021, je décide de me mettre à fond sur le développement informatique. Je me finance une formation diplomante chez Openclassrooms, que je vais terminer en plein amour pour mon nouveau métier. <br/><br/>

                        &emsp; Si vous êtes à la recherche d’une personne curieuse, ambitieuse et intègre. Vous pourriez avoir trouvé un partenaire de confiance qui contribuerait à votre entreprise. <br/>
                        Contactez moi, également, si vous souhaiteriez échanger autour d’un projet en cours ou que vous avez besoin d’un conseil sur une thématique de mon expertise. <br/>





                        </p>
                    </div>
                </section>
            </>
        )
    }
}

export default Page2
  