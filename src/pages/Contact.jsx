import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";

const Contact = () => {

    const alert = (e) => {
        e.preventDefault();
        new Swal({
            icon: 'success',
            title: 'Mensaje enviado :)',
            text: 'Te contactaremos lo mas pronto posible.'
        });
    };

    return (
        <React.Fragment>
            <Navbar />
            <div className="container my-5">
                <h1 className="text-center">Contáctanos</h1>
                <h4 className="text-center">Estamos para ayudarte, déjanos saber tus dudas.</h4>
                <p className="text-center text-danger">* Obligatorio</p>
                <div className="row my-5 justify-content-center">
                    <div className="col-6">
                        <form onSubmit={alert}>
                            <div className="row mb-3">
                                <label for="nombre" className="col-sm-3 col-form-label">Nombre <span className="text-danger">*</span></label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="nombre" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="correo" className="col-sm-3 col-form-label">Email <span className="text-danger">*</span></label>
                                <div className="col-sm-9">
                                    <input type="email" className="form-control" id="correo" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="Telefono" className="col-sm-3 col-form-label">Teléfono</label>
                                <div className="col-sm-9">
                                    <input type="tel" className="form-control" id="Telefono" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-9 offset-sm-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label className="form-check-label" for="gridCheck1">
                                            Deseo recibir más información en mi correo eléctronico.
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-3">
                                <button type="submit" className="btn btn-primary px-5">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Contact;