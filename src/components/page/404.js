import React from "react"

import './../../asset/css/notfound.css'
//import Iframe from "react-iframe";


export default function Notfound() {



    return (

        <>
            <head>
                <title>réseau des managers de centre-ville</title>
            </head>
            <header>
                <ul class="menu-bar" id="menu-bar">
                    <a href="/">
                        <img id="logomgphead" alt="réseau des managers de centre-ville"
                             src="Bloc marque MGP + CVV.png"
                        />
                    </a>
                </ul>
            </header>

            <h1>404 Error Page #2</h1>
            <section className="error-container">
                <span className="four"><span className="screen-reader-text">4</span></span>
                <span className="zero"><span className="screen-reader-text">0</span></span>
                <span className="four"><span className="screen-reader-text">4</span></span>
            </section>
        </>
    )
}
