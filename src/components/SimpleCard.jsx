import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'

const SimpleCard = ({ iconClass, title, description }) => {
    return (
        <div className="col-12 col-md-4">
            <div className="card border-dark mb-3">
                <div className="card-body text-dark">
                    <div className="text-center">
                        <i className={iconClass}></i>
                        <h5 className="card-title simpleCard-title">{title}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleCard;