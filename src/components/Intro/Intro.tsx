import React, { FC, FormEvent, useState } from 'react';
import Input from '../Input/Input'
import './intro.css'

interface IntroProps {
    onSearch : (value: string) => void
}

const Intro: FC<IntroProps> = ({ onSearch }) => {
    const [search , setSearch] = useState('');

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        onSearch(search);
        setSearch('')
    }

    return(
        <section className='hero'>
            <div className='hero-body'>
                <div className='container'>
                    <h1 className='title'>React-Redux-TypeScript</h1>
                    <form onSubmit={submitHandler} className='form'>
                        <Input 
                            value={search} 
                            onChange={(e) => setSearch(e.currentTarget.value)} 
                            placeholder='Search...car, nature, woman...)'
                        />
                        <button>Search</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Intro;