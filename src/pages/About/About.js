import React from 'react';
import Image from '../../images/about/allegory.png';

const About = () => {
    return (
        <div className='container'>
            <h1 className='text-center mt-3'>About Us</h1>
            <div className='d-md-flex align-items-center m-md-5'>
                <div>
                    <img src={Image} alt="" />
                    <p><small>Hans Rottenhammer, Allegory of the Arts (second half of the 16th century).</small></p>
                </div>
                <p className='ps-5'>The arts are a very wide range of human practices of creative expression, storytelling and cultural participation. They encompass multiple diverse and plural modes of thinking, doing and being, in an extremely broad range of media. Both highly dynamic and a characteristically constant feature of human life, they have developed into innovative, stylized and sometimes intricate forms. This is often achieved through sustained and deliberate study, training and/or theorizing within a particular tradition, across generations and even between civilizations. The arts are a vehicle through which human beings cultivate distinct social, cultural and individual identities, while transmitting values, impressions, judgments, ideas, visions, spiritual meanings, patterns of life and experiences across time and space.

                    Prominent examples of the arts include architecture, visual arts (including ceramics, drawing, filmmaking, painting, photography, and sculpting), literary arts (including fiction, drama, poetry, and prose), performing arts (including dance, music, and theatre), textiles and fashion, folk art and handicraft, oral storytelling, conceptual and installation art, criticism, and culinary arts (including cooking, chocolate making and winemaking). They can employ skill and imagination to produce objects, performances, convey insights and experiences, and construct new environments and spaces.

                    The arts can refer to common, popular or everyday practices as well as more sophisticated and systematic, or institutionalized ones. They can be discrete and self-contained, or combine and interweave with other art forms, such as the combination of artwork with the written word in comics. They can also develop or contribute to some particular aspect of a more complex art form, as in cinematography.

                    By definition, the arts themselves are open to being continually re-defined. The practice of modern art, for example, is a testament to the shifting boundaries, improvisation and experimentation, reflexive nature, and self-criticism or questioning that art and its conditions of production, reception, and possibility can undergo.

                    As both a means of developing capacities of attention and sensitivity, and as ends in themselves, the arts can simultaneously be a form of response to the world, and a way that our responses, and what we deem worthwhile goals or pursuits, are transformed. From prehistoric cave paintings, to ancient and contemporary forms of ritual, to modern-day films, art has served to register, embody and preserve our ever shifting relationships to each other and to the world.</p>
            </div>
        </div>
    );
};

export default About;