import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SimpleCard from "../components/SimpleCard";

const AboutUs = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <h1>Conócenos</h1>
                        <p>Fundada desde el 2002, somos los innovadores del concepto de gimnasios 24/7. En menos de 10 años, Glofox se ha convertido en la cadena más grande de franquicias de gimnasios a nivel mundial, con cientos de clubes en más de doce países. Pero nosotros no podíamos hace esto sin el duro trabajo, la dedicación y el respaldo de un gran grupo de personas y siempre estamos en busca de quien quiera sumarse a nuestra gran familia.</p>
                    </div>
                </div>
                <div className="row my-5">
                    <SimpleCard iconClass="bi bi-check-circle icon-size"
                        title="Facilidades"
                        description="Transformamos lo complicado en simple. Pensando en tu comodidad, contamos con diferentes servicios online como inscripción, transferencia de unidad, etc. Así como entrenamientos pensados para que los realices de forma autónoma."
                    />
                    <SimpleCard iconClass="bi bi-geo-alt icon-size"
                        title="Presencia"
                        description="Entrena cuando quieras y donde quieras. Queremos que siempre exista un Glofox cerca de ti. Actualmente Glofox cuenta con más de 100 gimnasios en México y suma más de 400 en todo latinoamérica."
                    />
                    <SimpleCard iconClass="bi bi-person-check icon-size"
                        title="Accesibilidad"
                        description="Nuestra misión es entregar fitness de alta calidad, haciéndola accesible para todos. Es por eso que todos nuestros gimnasios cuentan con la tecnología e instalaciones adecuadas para satisfacer las necesidades de nuestros usuarios."
                    />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default AboutUs;