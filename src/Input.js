import React, { useState } from 'react'

export const Input = ({setState}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setState( st => [inputValue,...st]);
        setInputValue('');
    }




    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}>
            </input>
        </form>
    )
}
