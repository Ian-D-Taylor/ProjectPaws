import React from "react";
import { Carousel } from 'react-bootstrap';
import './carousel.css';
import image1 from '../images/jasper_001.jpg';
import image2 from '../images/kong_toy.jpg';
import image3 from '../images/poodles.jpg';


const CarouselContainer = () => {
    return(
        <Carousel controls={false} >
            <Carousel.Item interval={3000} pause={false} max-height={100}>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>PRODUCTS</h3>
                    <p>Toys Collars Leads</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000} pause={false} max-height={100}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>IMAGES</h3>
                    <p>See us in the wild</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000} pause={false} max-height={100}>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>BLOG</h3>
                    <p>Get the latest info</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default CarouselContainer;