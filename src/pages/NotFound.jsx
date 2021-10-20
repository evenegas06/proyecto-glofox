import React from "react";

const NotFound = () => {
    return (
        <div className="page-404 text-center">
            <div>
                <h1 className="title-404">404</h1>
                <h3>¡No encontramos lo que buscabas!</h3>
                <br />
                <a href="/" className="btn btn-primary px-4 py-1">Regresar a la página principal</a>
            </div>
        </div>
    );
};

export default NotFound;