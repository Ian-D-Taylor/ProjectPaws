import React, { Component } from 'react';
import Card from './Card';
import img1 from '../images/jasper_001.jpg';
import img2 from '../images/jasper_001.jpg';
import img3 from '../images/jasper_001.jpg';

class Cards extends Component {
    render() {
        return(
            <div className="container-fluid d-flex-justify-content-center">
                <div className="row">
                    <div className="col-md-auto">
                        <Card imgsrc={img1} title="Walk" />
                    </div>
                    <div className="col-md-auto">
                        <Card imgsrc={img2} title="Treat" />
                    </div>
                    <div className="col-md-auto">
                        <Card imgsrc={img3} title="Train" />
                    </div>
                </div>
            </div>

        );
    }
}

export default Cards;
