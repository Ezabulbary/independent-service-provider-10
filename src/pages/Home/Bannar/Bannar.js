import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Bannar1 from '../../../images/banar/banar1.png';
import Bannar2 from '../../../images/banar/banar2.png';
import Bannar3 from '../../../images/banar/banar3.png';
import Bannar4 from '../../../images/banar/banar4.png';

const Bannar = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className='container' activeIndex={index} onSelect={handleSelect} variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Bannar1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Weave Dreams to Paint</h3>
                    <p>The arts are a vehicle through which human beings cultivate distinct social, cultural, and individual identities while transmitting values, impressions, judgments, ideas, visions, spiritual meanings, patterns of life, and experiences across time and space.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Bannar2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Weave Dreams to Paint</h3>
                    <p>Art encompasses multiple diverse and plural modes of thinking, doing, and being, in an extremely broad range of media.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Bannar3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Weave Dreams to Paint</h3>
                    <p>This is often achieved through sustained and deliberate study, training, and theorizing within a particular tradition, across generations, and even between civilizations.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Bannar4}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Weave Dreams to Paint</h3>
                    <p>The arts are a very wide range of human practices of creative expression, storytelling, and cultural participation.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Bannar;