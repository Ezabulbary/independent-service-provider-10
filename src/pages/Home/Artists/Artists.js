import React, { useEffect, useState } from 'react';
import Artist from '../Artist/Artist';

const Artists = () => {
    const [artists, setArtists] = useState([]);

    useEffect( () => {
        fetch('artists.json')
        .then(res => res.json())
        .then(data => setArtists(data))
    }, [])

    return (
        <div className='container'>
            <h1 className='text-center shadow-lg p-3 m-5 bg-body rounded'>Our Artist</h1>
            <div className='row'>
                {
                    artists.map(artist => <Artist
                        key={artist.id}
                        artist={artist}
                    ></Artist>)
                }
            </div>
        </div>
    );
};

export default Artists;