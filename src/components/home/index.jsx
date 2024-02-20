'use client'

import treinos from '@/objects/treino.json'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const HomeComponent = () => {

    console.log(treinos)

    const [data, setData] = useState({})

    useEffect(() => {
        setData(treinos)
    }, [])

    return (
        <main className='flex flex-col justify-center items-center'>
            <p>Home</p>
            <section>
                {treinos.map((index, key) => (
                    <div key={key}>
                        <Link href={{
                            pathname: '/treino',
                            query: {
                                tag: key,
                            }
                        }}><span>{index.dia}</span>: <span>{index.titulo}</span></Link>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default HomeComponent
