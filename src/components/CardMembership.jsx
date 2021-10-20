import React from 'react';

const CardMembership = ({ header, title, description, cost }) => {
    return (
        <div className="col-12 col-md-4">
            <div className="card">
                <div className="card-header">
                    {header}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text title-size">{cost}</p>
                    <a href="/contact" className="btn btn-primary">Suscribirse ahora</a>
                </div>
            </div>
        </div>
    );
};

export default CardMembership;