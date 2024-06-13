'use client'

import './home.css'

import treinos from '@/objects/treino2.json'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const HomeComponent = () => {

    const date = new Date()
    const dataHoje = date.getDay()

    useEffect(() => {
        const destacado = document.querySelector(`#dia-${dataHoje}`)
        destacado.classList.add('destacado')
        console.log(destacado)
    }, [dataHoje])

    //console.log(dataHoje)
    //console.log(treinos)

    return (
        <main className='flex flex-col justify-center items-center gap-4 py-2'>
            <p className='text-2xl font-semibold'>Home</p>
            <section className='flex flex-col gap-4'>
                {treinos.map((index, key) => (
                    <div className='rounded-3xl border border-qua px-4 py-4 text-lg drop-shadow-lg ' id={`dia-${key}`} key={key}>
                        {index.titulo === 'Descanso' ? (
                            <div>{index.dia}: <span className='font-medium'>{index.titulo}</span></div>
                        ) : (
                            <Link href={{
                                pathname: '/treino',
                                query: {
                                    tag: key,
                                }
                            }}><div>{index.dia}: <span className='font-medium'>{index.titulo}</span></div></Link>
                        )}
                    </div>
                ))}
            </section>
        </main>
    )
}

export default HomeComponent
