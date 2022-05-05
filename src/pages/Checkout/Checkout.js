import React from 'react';
import Collage from '../Collage/Collage';
import image1 from '../../images/gallary/gallery1.png';
import image2 from '../../images/gallary/gallery2.png';
import image3 from '../../images/gallary/gallery3.png';
import image4 from '../../images/gallary/gallery4.png';
import image5 from '../../images/gallary/gallery5.png';
import image6 from '../../images/gallary/gallery6.png';
import image7 from '../../images/gallary/gallery7.png';
import image8 from '../../images/gallary/gallery8.png';
import image9 from '../../images/gallary/gallery9.png';
import image10 from '../../images/gallary/gallery10.png';
import image11 from '../../images/gallary/gallery11.png';
import image12 from '../../images/gallary/gallery12.png';
import image13 from '../../images/gallary/gallery13.png';
import image14 from '../../images/gallary/gallery14.png';
import image15 from '../../images/gallary/gallery15.png';
import image16 from '../../images/gallary/gallery16.png';
import image17 from '../../images/gallary/gallery17.png';
import image18 from '../../images/gallary/gallery18.png';
import image19 from '../../images/gallary/gallery19.png';
import image20 from '../../images/gallary/gallery20.png';
import image21 from '../../images/gallary/gallery21.png';
import image22 from '../../images/gallary/gallery22.png';
import image23 from '../../images/gallary/gallery23.png';
import image24 from '../../images/gallary/gallery24.png';
import image25 from '../../images/gallary/gallery25.png';
import image26 from '../../images/gallary/gallery26.png';
import image27 from '../../images/gallary/gallery27.png';
import image28 from '../../images/gallary/gallery28.png';
import image29 from '../../images/gallary/gallery29.png';
import image30 from '../../images/gallary/gallery30.png';
import image31 from '../../images/gallary/gallery31.png';
import image32 from '../../images/gallary/gallery32.png';
import image33 from '../../images/gallary/gallery33.png';
import image34 from '../../images/gallary/gallery34.png';
import image35 from '../../images/gallary/gallery35.png';
import image36 from '../../images/gallary/gallery36.png';
import image37 from '../../images/gallary/gallery37.png';
import image38 from '../../images/gallary/gallery38.png';

const Checkout = () => {
    const images = [
        { id: 1, img: image1 },
        { id: 2, img: image2 },
        { id: 3, img: image3 },
        { id: 4, img: image4 },
        { id: 5, img: image5 },
        { id: 6, img: image6 },
        { id: 7, img: image7 },
        { id: 8, img: image8 },
        { id: 9, img: image9 },
        { id: 10, img: image10 },
        { id: 11, img: image11 },
        { id: 12, img: image12 },
        { id: 13, img: image13 },
        { id: 14, img: image14 },
        { id: 15, img: image15 },
        { id: 16, img: image16 },
        { id: 17, img: image17 },
        { id: 18, img: image18 },
        { id: 19, img: image19 },
        { id: 20, img: image20 },
        { id: 21, img: image21 },
        { id: 22, img: image22 },
        { id: 23, img: image23 },
        { id: 24, img: image24 },
        { id: 25, img: image25 },
        { id: 26, img: image26 },
        { id: 27, img: image27 },
        { id: 28, img: image28 },
        { id: 29, img: image29 },
        { id: 30, img: image30 },
        { id: 31, img: image31 },
        { id: 32, img: image32 },
        { id: 33, img: image33 },
        { id: 34, img: image34 },
        { id: 35, img: image35 },
        { id: 36, img: image36 },
        { id: 37, img: image37 },
        { id: 38, img: image38 },
    ]
    return (
        <div className='container checkout-container'>
            <h1 className='text-center text-success shadow-lg p-3 m-5 bg-body rounded'>Our Collage</h1>
            <div className='row'>
                {
                    images.map(image => <Collage
                        key={image.id}
                        image={image}
                    ></Collage>)
                }
            </div>
        </div>
    );
};

export default Checkout;