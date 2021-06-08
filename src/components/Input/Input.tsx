import React, { FC, InputHTMLAttributes } from 'react';
import './input.css'

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
    type = 'text', placeholder, value, name, onChange
}) => {
    return(
        <div className='field'>
            <div className='control'>
                <input 
                    className='input'
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    id={name}
                    onChange={onChange}
                    required
                    autoComplete='off'
                />
            </div>
        </div>
    )
}

export default Input;