import React from 'react'

export const GifGrid = ({img}) => {
    return (
        <div className='test2'>


            <div >
                <img  src={img.url}></img>
            </div>
            
            <p>{img.title}</p>

        </div>
    )
}
