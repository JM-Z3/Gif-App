import React, { useEffect, useState } from 'react'
import { GifGrid } from './GifGrid';
import { ApiCall } from './helpers/apiCall';

export const Result = ({st}) => {
    
    const [images, setImages] = useState([]);



    useEffect(() => {
        ApiCall(st).then(th => {
            setTimeout(() => {
                setImages(th);
                
            }, 1000);
        });
        
    }, [st])

    
    
    return (
        <div className='test'>
            {
                images.map( img => {
                    return <GifGrid key={img.id} img={img}/>
                })
            }
            
        </div>
    )
}
