import React from "react";
import "./scroll.css"

class Scroll extends React.Component{

    goBiographie = () => {
        console.log("ok")
        window.location.indexOf("#biographie")
    }
    render(){

        return(
            <div className="barreScroll">
                <a style={{textDecoration: "none"}} href="#biographie"><div className="cercle" id="cercle 2" > </div>  </a> 
                <div className="barreVertical"></div>
                <a style={{textDecoration: "none"}} href="#competencess"><div className="cercle" id="cercle 3"> </div></a>
                <div className="barreVertical"></div>
                <a style={{textDecoration: "none"}} href="#projetss"><div className="cercle" id="cercle 4"> </div></a>
                <div className="barreVertical"></div>
                <a style={{textDecoration: "none"}} href="#contactt"><div className="cercle" id="cercle 5"> </div> </a>
            </div>
        )
    }
}

export default Scroll