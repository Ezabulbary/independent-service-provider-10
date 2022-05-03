import React from 'react';
import Bannar1 from '../../../images/banar/banar1.png';
import Bannar2 from '../../../images/banar/banar2.png';
import Bannar3 from '../../../images/banar/banar3.png';
import Bannar4 from '../../../images/banar/banar4.png';

const Bannar = () => {
    return (
        <div id="carouselExampleDark" className="container carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={Bannar1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>The Art</h5>
                        <p>The arts are a vehicle through which human beings cultivate distinct social, cultural, and individual identities while transmitting values, impressions, judgments, ideas, visions, spiritual meanings, patterns of life, and experiences across time and space.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={Bannar2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>The Art</h5>
                        <p>Art encompasses multiple diverse and plural modes of thinking, doing, and being, in an extremely broad range of media.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Bannar3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>The Art</h5>
                        <p>This is often achieved through sustained and deliberate study, training, and theorizing within a particular tradition, across generations, and even between civilizations.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Bannar4} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>The Art</h5>
                        <p>The arts are a very wide range of human practices of creative expression, storytelling, and cultural participation.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Bannar;