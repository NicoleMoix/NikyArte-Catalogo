import React, { useState, useEffect } from 'react';
import NavHome from './partails/navHome.jsx';
//import Carousel from './partails/carousel.jsx';
import Catalog from './partails/catalog.jsx';
//import Contact from './partails/contact.jsx';


function Catalogo (){
    return(
        <>
            <NavHome/>
        <main>
            {/*<section id="inicio">
                <Carousel/>
            </section>*/}
            <section id="catalogo">
                <Catalog/>
            </section>
            {/*<section id="contacto">
                <Contact/>
            </section>*/}
        </main>
        </>
    );
}
export default Catalogo;