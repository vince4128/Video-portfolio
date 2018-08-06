import React from 'react';

const Contact = () => {
    return(
        <section className="m-contact">

            <article className="m-contact__top">

                <div className="m-contact__name">
                    <h1>Lars Blumers</h1>
                    <h2 className="m-contact__mail"><a href="mailto:lars.blumers@mass.eu">lars.blumers@mass.eu</a></h2>
                </div>

            </article>

            <p className="a-contact-representation">Commercial Representation :</p>

            <article className="m-contact__bottom">

                <section className="m-contact__card">

                    <div className="m-contact__card__flag">
                        <p>FRANCE</p>
                    </div>

                    <div>
                        <h1>BIG PRODUCTIONS</h1>
                    </div>

                    <div>                    

                        <h3><a href="https://maps.google.com/?q=19,+RUE+DE+L'%C3%89CHIQUIER+75010+-+PARIS+FRANCE&amp;entry=gmail&amp;source=g" target="_blank">19, RUE DE L'ÉCHIQUIER<br/>
                            75010 - PARIS<br/>
                            FRANCE</a>
                        </h3>                    

                        <h3>T. (33)01 53 93 68 00<br/>
                            F. (33)01 53 93 68 01<br/>
                            <br/>                        
                            <a href="mailto:big@bigproductions.fr">BIG@BIGPRODUCTIONS.FR</a>
                        </h3>
                </div>

                </section>

                <section className="m-contact__card">

                <div className="m-contact__card__flag">
                    <p>GERMANY</p>
                </div>                            

                <div>
                    <h1>Gesas Management</h1>
                </div>

                <div>
                    <h3>Gesa Müller-Reinhardt                    
                    <br/>+49 (0) 172 45 22 609<br/>
                        <br/>                        
                        <a href="mailto:gesa@gesas.net">gesa@gesas.net</a>
                    </h3>
                </div>

                <div>
                    <h3>Petra Sauer                   
                    <br/>+49 (0) 172 45 22 609<br/>
                        <br/>                        
                        <a href="mailto:petra@gesas.net">petra@gesas.net</a>
                    </h3>
                </div>

                </section>

            </article>        

        </section>
    )
}

export default Contact;