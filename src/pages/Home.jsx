import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import CardMembership from "../components/CardMembership";
import Footer from "../components/Footer";


const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className="row mx-5">
                <div className="col-6">
                    <h1>GLOFOX - GYM</h1>
                    <p className="title-size">Nuestra trifecta de ciencia, coaching y tecnología hace efectivo
                        tu entrenamiento y te ayuda a vivir una vida más larga y vibrante</p>
                </div>
            </div>
            <br />
            <Carousel />
            <div className="container my-5">
                <h3 className="text-center">Conoce nuestras membresías</h3>
                <div className="row my-5">
                    <CardMembership header="La mas vendida"
                        title="Membresía Basic"
                        description="Si tienes muy poco tiempo y tu estilo de vida lo requiere el paquete básico es ideal para ti."
                        cost="$1,400"
                    />
                    <CardMembership header="Recomendado"
                        title="Membresía Elite"
                        description="8 sesiones al mes para aquellos que disfrutan la variedad en sus actividades físicas."
                        cost="$2,400"
                    />
                    <CardMembership header="La mejor opción"
                        title="Membresía Premier"
                        description="Sesiones ilimitadas al mes para ver resultados inmediatos."
                        cost="$2,990"
                    />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Home;