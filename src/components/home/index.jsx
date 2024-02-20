'use client'

import css from './home.css'

import treinos from '@/objects/treino.json'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const HomeComponent = () => {

    const date = new Date()
    const dataHoje = date.getDay()

    //console.log(treinos)

    return (
        <main className='flex flex-col justify-center items-center gap-4 py-2'>
            <p className='text-2xl font-semibold'>Home</p>
            <section className='flex flex-col gap-4'>
                {treinos.map((index, key) => (
                    <div className='treinoDiv text-lg' key={key}>
                        {index.titulo === 'Descanso' ? (
                            <div><span>{index.dia}:</span> <span className='font-medium'>{index.titulo}</span></div>
                        ) : (
                            <Link href={{
                                pathname: '/treino',
                                query: {
                                    tag: key,
                                }
                            }}><span>{index.dia}:</span> <span className='font-medium'>{index.titulo}</span></Link>
                        )}
                    </div>
                ))}
            </section>
        </main>
    )
}

export default HomeComponent
