import React, { useState } from 'react'
import { Input } from './Input'
import { Result } from './Result';

export const AplicacionGif = () => {
    
    const [state, setState] = useState(['messi']);

    const button = () => {
        setState([]);
    }
    
    
    return (
        <div>
            <h1>GIF Results</h1>
            <div className='input-button'>
                <Input setState={setState}/>
                <button className='btn btn-outline-secondary' onClick={button}>Clear</button>
            </div>
            <hr/>
            {
                state.map( st => {
                    return <Result st={st} key={st}/>
                })
            }
            
            
        </div>
    )
}
