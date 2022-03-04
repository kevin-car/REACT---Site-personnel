import React from "react";
import Titre from "../../../component/titre/titre";
import "./page5.css"
import Image from "../../../img/Image_de_fond.jpg"
import linkedin from "../../../img/reseauxSociaux/linkedin.png"
import github from "../../../img/reseauxSociaux/github2.png"
import CV from "../../../img/reseauxSociaux/CV.png"
import axios from "axios"
import {withFormik} from "formik"
import * as Yup from "yup"
import "yup-phone";
import { parse } from "ipaddr.js";
import emailjs from '@emailjs/browser';

class Page5 extends React.Component{

    envoyerEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_zr9wd4n', {"nom": "nom", "telephone":"060606060", "message": "le message"}, '-qj_l4Q1X2h47qgEK')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }
    
    render(){
        return(
            <>
                <section id="contactt">
                    <Titre> ME CONTACTER </Titre>
                    <img src={Image} alt="image de fond. C'est un clavier violet, en vue perpective" className="imageBackground"/>
                        <div className="meContacter">
                            {/* Le bloc à gauche, le formulaire */}
                            <div className="formulaire">
                                <form action="/action_page.php">
                                {/* Nom  */}
                                    <label htmlFor="fname">Votre Nom et Prénom</label><br/>
                                    <input className="titreLabel"   maxLength='30' onBlur={this.props.handleBlur} type="text" id="nom" name="nom" value={this.props.values.nom} onChange={this.props.handleChange} /><br/>
                                    { this.props.touched.nom && this.props.errors.nom && <p style={{color : "red"}}>{this.props.errors.nom}</p>}
                                {/* Adresse Mail */}
                                    <label htmlFor="mail">Votre adresse mail</label><br/>
                                    <input className="mail" maxLength='40' onBlur={this.props.handleBlur} type="text" id="mail" name="mail" value={this.props.values.mail} onChange={this.props.handleChange} /><br/><br/>
                                    { this.props.touched.mail && this.props.errors.mail && <p style={{color : "red"}}>{this.props.errors.mail}</p>}

                                {/* Numéro de téléphone */}
                                    <label htmlFor="telephone">Votre numéro de téléphone (facultatif)</label><br/>
                                    <input className="telephone" onBlur={this.props.handleBlur} maxLength='20' type="text" id="telephone" name="telephone" value={this.props.values.telephone} onChange={this.props.handleChange} /><br/><br/>
                                    {this.props.touched.telephone && this.props.errors.telephone && <p style={{color : "red"}}>{this.props.errors.telephone}</p>}

                                
                                {/* Message */}
                                    <label htmlFor="message">Votre message </label><br/>
                                    <div>
                                        <textarea  
                                            className="form-control"
                                            id="message" rows="12"
                                            maxLength='500'
                                            onBlur={this.props.handleBlur}
                                            name="message"
                                            value={this.props.values.message} 
                                            onChange={this.props.handleChange}
                                        />
                                        {this.props.touched.message && this.props.errors.message && <p style={{color : "red"}}>{this.props.errors.message}</p>}

                                    </div>
                                {/* Bouton d'envoi du formulaire */}
                                    {this.props.dirty && this.props.isValid 
                                            ? <button style={{backgroundColor: "#8DC08F" }} className=" boutonSubmit" type="submit" value="ENVOYER" onClick={this.props.handleSubmit}>ENVOYER LE MESSAGE</button>
                                            : <button style={{backgroundColor: "#B5B0B0" }} className=" boutonSubmit" type="submit" value="ENVOYER" onClick={this.props.handleSubmit}>FORMULAIRE INCOMPLET</button>
                                    }
                                </form>
                            </div>

                            {/* Les liens */}
                            <div className="liens">
                                <ul>
                                    <li>
                                        <a href="https://www.linkedin.com/in/kevin-carpentier/"><img src={linkedin} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/kevin-car"><img src={github} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="./CV/CV.pdf" download="CV"><img src={CV} alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </section>
            </>
        )
    }
}

export default withFormik({

    mapPropsToValues : () => ({
        // Remplace les states qui représente les champs de formulaires
        nom : '', 
        mail : '',
        telephone : '', 
        message : ''

    }),
        // Contient les règles de validations


    validationSchema: Yup.object().shape({
        nom : Yup.string()
            .min(2, 'Votre nom doit avoir minimum 3 caractères')
            .max(20, 'Votre nom doit avoir maximum 20 caractères')
            .required("Merci d'entrer votre nom"),

        mail : Yup.string()
            .email("ceci n'est pas un type d'email reconnu")
            .required("l'adresse mail est obligatoire"),

        telephone: Yup.string()
            .matches(/^([0123456789 +'])+$/u,
            'Les caractères autorisés sont les chiffres, le signe + et les espaces. Votre numéro doit faire au moins 6 caractères et moins de 20 caractères ')
            .min(6, "votre numéro est trop court")
            .max(20, "votre numéro est trop long")
        ,

/*         telephone : Yup.string()
        .phone('IN', true, "votre numéro de téléphone n'est pas reconnu"), */


        message : Yup.string()
        .min(5, "Votre message est trop court")
        .required("Merci d'écrire votre texte ici"),
    }),
        
    
    handleSubmit:(values, {props}) => {



        // Validation du formulaire en question
    const templateParams = {
        "mail" : values.mail, 
        "nom" : values.nom,
        "message" : values.message,
        "telephone" : Number(values.telephone),
        "traite": "non"
    }

    emailjs.send('service_n62o4nr', 'template_zr9wd4n', templateParams, "-qj_l4Q1X2h47qgEK")
    .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
    console.log('FAILED...', error);
    });

    /* Stockage du message dans une base de donnée Firebase */
    axios({
        url: 'https://sitevitrine-38-default-rtdb.firebaseio.com/Messages.json',
        method: 'post',
        data : templateParams
      })
      .then(
          res=>{
            console.log(res)
            window.alert("votre message a bien été transmis")
            window.location.reload()
        } )
      .catch(error => console.log(error))
        
      /* Envoie d'un email automatique à ma boite mail pro */

        


    }
    })

         //   e.preventDefault();



    (Page5)


    